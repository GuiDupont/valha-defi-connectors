import curve from "@curvefi/api";
import { PoolTemplate } from "@curvefi/api/lib/pools";

import {
  AdditionalOptions,
  AddressesInput,
  AmountInput,
  Pool,
} from "src/utils/types/connector-types";
import { Amount } from "src/utils/types/utils";
import { RPC_PROVIDERS } from "../../../../utils/CONST/RPC_PROVIDERS";

import { toBnERC20Decimals } from "../../../../utils/toBnTokenDecimals";

export async function initiateCurve(network: string) {
  await curve.init("JsonRpc", { url: RPC_PROVIDERS[network] });
  await curve.fetchCryptoFactoryPools();
  await curve.fetchFactoryPools();
}

async function getDepositAmountsArg(
  underlying_coin_addresses: string[],
  underlying_tokens_to_invest: string[],
  amountsMinimumNotBN: Amount[],
  chain: string
) {
  const amounts = [];
  for (let i = 0; i < underlying_coin_addresses.length; i++) {
    const index = underlying_tokens_to_invest.indexOf(
      underlying_coin_addresses[i]
    );
    if (index === -1) amounts.push("0");
    else {
      amounts.push(
        await toBnERC20Decimals(
          amountsMinimumNotBN[index].humanValue,
          chain,
          underlying_coin_addresses[i]
        )
      );
    }
  }
  return amounts;
}

async function deposit(
  pool: Pool,
  amount: AmountInput,
  addresses: AddressesInput,
  options?: AdditionalOptions
) {
  await initiateCurve(pool.chain);

  const poolInfo = curve.getPool(pool.name);

  let args: [string[], string] = [[], "0"];

  args[0] = await getDepositAmountsArg(
    poolInfo.underlyingCoinAddresses,
    pool.underlying_tokens,
    amount.amountsMinimum,
    pool.chain
  );
  args[1] = await toBnERC20Decimals(
    amount.amount.humanValue,
    pool.chain,
    poolInfo.lpToken
  );

  return {
    abi: `stablePool${poolInfo.underlyingCoins.length}.json`,
    pool_address: poolInfo.address,
    pool_name: poolInfo.name,
    position_token: poolInfo.lpToken,
    interaction_address: poolInfo.address,
    amount: args[1],
    method_name: "add_liquidity",
    args: args,
  };
}

async function handleRemoveLiquidity(
  pool: Pool,
  poolInfo: PoolTemplate,
  amount: AmountInput,
  addresses: AddressesInput,
  options?: AdditionalOptions
): Promise<[[string, string[]], string]> {
  const method_name = "remove_liquidity";
  let args: [string, string[]] = ["", []];
  args[0] = await toBnERC20Decimals(
    amount.amount.humanValue,
    pool.chain,
    poolInfo.lpToken
  );

  for (let i = 0; i < amount.amountsMinimum.length; i++) {
    args[1].push(
      await toBnERC20Decimals(
        amount.amountsMinimum[i].humanValue,
        pool.chain,
        poolInfo.underlyingCoinAddresses[i]
      )
    );
  }
  return [args, method_name];
}

async function redeem(
  pool: Pool,
  amount: AmountInput,
  addresses: AddressesInput,
  options?: AdditionalOptions
) {
  await initiateCurve(pool.chain);

  const poolInfo = curve.getPool(pool.name);
  const poolLength = poolInfo.underlyingCoins.length;
  let filled = 0;
  for (let i = 0; i < poolLength; i++) {
    if (amount.amountsMinimum[i].humanValue !== "0") filled++;
  }
  let args: any, method_name: string;
  if (filled === poolLength) {
    [args, method_name] = await handleRemoveLiquidity(
      pool,
      poolInfo,
      amount,
      addresses,
      options
    );
  } else
    throw new Error(
      "Not implemented Remove Liquidity One Coin, neither Remove Liquidity Imbalance"
    );

  return {
    abi: `stablePool${poolInfo.underlyingCoins.length}.json`,
    pool_address: poolInfo.address,
    pool_name: poolInfo.name,
    position_token: poolInfo.lpToken,
    interaction_address: poolInfo.address,
    amount: args[0],
    method_name: method_name,
    args: args,
  };
}

async function stake(
  pool: Pool,
  amount: AmountInput,
  addresses: AddressesInput,
  options?: AdditionalOptions
) {
  await initiateCurve(pool.chain);
  const pool_info = curve.getPool(pool.name);
  const parsed_amount = await toBnERC20Decimals(
    amount.amount.humanValue,
    pool.chain,
    pool_info.lpToken
  );
  return {
    abi: "gauge.json",
    pool_address: pool_info.address,
    pool_name: pool_info.name,
    position_token: pool_info.lpToken,
    interaction_address: pool_info.gauge,
    amount: parsed_amount,
    method_name: "deposit",
    args: [parsed_amount, addresses.receiverAddress],
  };
}

async function unstake(
  pool: Pool,
  amount: AmountInput,
  addresses: AddressesInput,
  options?: AdditionalOptions
) {
  await initiateCurve(pool.chain);
  const pool_info = curve.getPool(pool.name);
  const parsed_amount = await toBnERC20Decimals(
    amount.amount.humanValue,
    pool.chain,
    pool_info.lpToken
  );
  return {
    abi: "gauge.json",
    pool_address: pool_info.address,
    pool_name: pool_info.name,
    position_token: pool_info.lpToken,
    interaction_address: pool_info.gauge,
    amount: parsed_amount,
    method_name: "withdraw",
    args: [parsed_amount],
  };
}

async function claimRewards(
  pool: Pool,
  amount: AmountInput,
  addresses: AddressesInput,
  options?: AdditionalOptions
) {
  const supportedPools = [
    "susd",
    "sbtc",
    "musd",
    "rsv",
    "dusd",
    "pbtc",
    "seth",
    "eurs",
    "aave",
    "steth",
    "saave",
    "ankreth",
    "usdp",
    "ironbank",
    "link",
    "tusd",
    "frax",
    "lusd",
    "busdv2",
    "reth",
    "alusd",
    "mim",
    "tricrypto2",
    "eurt",
    "eurtusd",
    "eursusd",
    "crveth",
    "rai",
    "cvxeth",
    "xautusd",
    "spelleth",
    "teth",
    "2pool",
    "fraxusdc",
    "euroc",
    "frxeth",
    "sbtc2",
  ];

  if (supportedPools.find((p) => p === pool.name) === undefined)
    throw new Error("Pool not supported");

  await initiateCurve(pool.chain);

  const poolInfo = curve.getPool(pool.name);

  return {
    txInfo: {
      abi: "LiquidityGaugeV2.json", //abi array
      interaction_address: poolInfo.gauge, // contract to interact with to interact with poolAddress
      method_name: "claim_rewards", //method to interact with the pool
      args: [], //args to pass to the smart contracts to trigger 'method_name'
    },
  };
}

module.exports = {
  deposit: deposit,
  // deposit_and_stake: null,
  unlock: null,
  redeem: redeem,
  stake: stake,
  unstake: unstake,
  boost: null,
  unboost: null,
  claim_rewards: claimRewards,
  claim_interests: null,
};