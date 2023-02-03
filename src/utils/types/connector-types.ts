import { BigNumber } from "ethers";
import { Chain } from "./networks";
import { Amount, AssetInfo, TxInfo } from "./utils";

export interface Pool {
  name: string;
  chain: Chain | string;
  underlying_tokens: string[];
  pool_address: string;
  investing_address: string;
  staking_address: string | null;
  boosting_address: string | null;
  distributor_address: string | null;
  rewards_tokens: string[] | null;
  metadata: any;
}

export interface AmountInput {
  amount: Amount;
  amountsDesired?: Amount[];
  amountsMinimum?: Amount[];
}

export interface AddressesInput {
  userAddress: string;
  receiverAddress: string;
}

export interface AdditionalOptions {
  ranges: any[];
  rangeToken: any;
  lockupTimestamp: any;
  deadline: any;
  other?: any; // Or metadata ? Not used for now
}

export interface Analytics {
  status: boolean | null;
  tvl: number | null; // In USD amount.
  liquidity: number | null; // In USD amount
  outloans: number | null;// In USD amount
  losses: number | null; // In USD amount
  capacity: number | null; // ?
  apy: number | null; // In full number, (e.g. 0.04 = 4% APY)
  activity_apy: number | null; // In full number, (e.g. 0.04 = 4% APY)
  rewards_apy: number | null; // In full number, (e.g. 0.04 = 4% APY)
  boosting_apy: number | null; // In full number, (e.g. 0.04 = 4% APY)
  share_price: number | null; // In USD amount
  minimum_deposit: number | null; // In underlying asset amount
  maximum_deposit: number | null; // In underlying asset amount
}

export interface AnalyticsExport {
  main: Analytics | Record<never, never>,
  url: string,
}

export interface InteractionsReturnObject {
  txInfo: TxInfo;
  assetInfo: AssetInfo | null;
}

export enum InteractionFunctionNames {
  deposit = "deposit",
  deposit_and_stake = "deposit_and_stake",
  unlock = "unlock",
  redeem = "redeem",
  stake = "stake",
  unstake = "unstake",
  boost = "boost",
  unboost = "unboost",
  claim_rewards = "claim_rewards",
  claim_interests = "claim_interests",
}

export type InteractionFunction = (
  pool: Pool,
  amount: AmountInput,
  addresses: AddressesInput,
  options?: AdditionalOptions
) => Promise<InteractionsReturnObject>;

export type Interactions = Record<
  InteractionFunctionNames,
  InteractionFunction
>;
