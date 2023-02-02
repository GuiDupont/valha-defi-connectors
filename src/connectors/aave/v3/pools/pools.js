const POOLS = [
  {
    name: 'Pool USDC',
    chain: 'optimism',
    underlying_tokens: ['0x7f5c764cbc14f9669b88837ca1490cca17c31607'],
    pool_address: '0x625E7708f30cA75bfd92586e17077590C60eb4cD',
    investing_address: '0x794a61358D6845594F94dc1DB02A252b5b4814aD',
    staking_address: '0x0000000000000000000000000000000000000000',
    boosting_address: null,
    distributor_address: '0x929EC64c34a17401F460460D4B9390518E5B473e',
    rewards_tokens: ['0x4200000000000000000000000000000000000042'],
    metadata: {}
  },
  {
    name: 'Pool WETH',
    chain: 'optimism',
    underlying_tokens: ['0x4200000000000000000000000000000000000006'],
    pool_address: '0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8',
    investing_address: '0x794a61358D6845594F94dc1DB02A252b5b4814aD',
    staking_address: '0x0000000000000000000000000000000000000000',
    boosting_address: null,
    distributor_address: '0x929EC64c34a17401F460460D4B9390518E5B473e',
    rewards_tokens: ['0x4200000000000000000000000000000000000043'],
    metadata: {}
  },
  {
    name: 'Pool WBTC',
    chain: 'optimism',
    underlying_tokens: ['0x68f180fcce6836688e9084f035309e29bf0a2095'],
    pool_address: '0x078f358208685046a11C85e8ad32895DED33A249',
    investing_address: '0x794a61358D6845594F94dc1DB02A252b5b4814aD',
    staking_address: '0x0000000000000000000000000000000000000000',
    boosting_address: null,
    distributor_address: '0x929EC64c34a17401F460460D4B9390518E5B473e',
    rewards_tokens: ['0x4200000000000000000000000000000000000044'],
    metadata: {}
  },
  {
    name: 'Pool DAI',
    chain: 'optimism',
    underlying_tokens: ['0xda10009cbd5d07dd0cecc66161fc93d7c9000da1'],
    pool_address: '0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE',
    investing_address: '0x794a61358D6845594F94dc1DB02A252b5b4814aD',
    staking_address: '0x0000000000000000000000000000000000000000',
    boosting_address: null,
    distributor_address: '0x929EC64c34a17401F460460D4B9390518E5B473e',
    rewards_tokens: ['0x4200000000000000000000000000000000000045'],
    metadata: {}
  },
  {
    name: 'Pool USDT',
    chain: 'optimism',
    underlying_tokens: ['0x94b008aA00579c1307B0EF2c499aD98a8ce58e58'],
    pool_address: '0x6ab707Aca953eDAeFBc4fD23bA73294241490620',
    investing_address: '0x794a61358D6845594F94dc1DB02A252b5b4814aD',
    staking_address: '0x0000000000000000000000000000000000000000',
    boosting_address: null,
    distributor_address: '0x929EC64c34a17401F460460D4B9390518E5B473e',
    rewards_tokens: ['0x4200000000000000000000000000000000000046'],
    metadata: {}
  },
  {
    name: 'Pool SUSD',
    chain: 'optimism',
    underlying_tokens: ['0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9'],
    pool_address: '0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97',
    investing_address: '0x794a61358D6845594F94dc1DB02A252b5b4814aD',
    staking_address: '0x0000000000000000000000000000000000000000',
    boosting_address: null,
    distributor_address: '0x929EC64c34a17401F460460D4B9390518E5B473e',
    rewards_tokens: ['0x4200000000000000000000000000000000000047'],
    metadata: {}
  }
]

/// pools
async function pools () {
  return POOLS
}

module.exports = pools
