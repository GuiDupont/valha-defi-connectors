import curve from "@curvefi/api";
import { Pools } from "../../../../utils/Pools";

async function generateBasePools() {
  await curve.init(
    "Alchemy",
    { network: "homestead", apiKey: "i25CEzZu6JD-2uH08tSkKRJKzGts26PE" },
    { chainId: 1 }
  );
  await curve.fetchFactoryPools();
  await curve.fetchCryptoFactoryPools();
  const list = curve.getPoolList();
  const POOLS = new Map<string, Pools>();
  console.log("import { Pools } from '../../../../utils/Pools';\n");
  console.log("const POOLS = [");
  for (let i = 0; i < list.length; i++) {
    const info = curve.getPool(list[i]);
    // console.log(await info.rewardTokens());

    POOLS.set(info.name, {
      name: info.name,
      chain: "ethereum",
      underlying_tokens: info.underlyingCoinAddresses,
      pool_address: info.address,
      investing_address: info.address,
      staking_address: info.gauge,
      boosting_address: info.gauge,
      distributor_address: info.address, // TODO: check this
      rewards_tokens: (await info.rewardTokens()).map(
        (token: { address: string }) => token.address
      ),
      metadata: {},
    });
  }
  POOLS.forEach((pool) => {
    console.log(pool, ",");
  });
  console.log(
    "] as Pools[]; \n\nexport  async function pools() { return POOLS; }"
  );
}

generateBasePools();