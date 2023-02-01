const POOLS = [
  {
    name: 'Cake-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x0ed7e52944161450477ee417de9cd3a859b14fd0',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'WBNB-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'ADA-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x28415ff2c35b65b9e5c7de82126b4015ab9d031f',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'DOT-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0xdd5bad8f8b360d76d12fda230f8baf42fe0022cf',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'WBNB-LINK',
    chain: 'bsc',
    underlying_tokens: [
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      '0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD'
    ],
    pool_address: '0x824eb9fadfb377394430d2744fa7c42916de3ece',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'USDT-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x55d398326f99059fF775485246999027B3197955',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x7efaef62fddcca950418312c6c91aef321375a00',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'TWT-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x4B0F1812e5Df2A09796481Ff14017e6005508003',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x3dcb1787a95d2ea0eb7d00887704eebf0d79bb13',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'WBNB-XVS',
    chain: 'bsc',
    underlying_tokens: [
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      '0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63'
    ],
    pool_address: '0x7eb5d86fd78f3852a3e0e064f2842d45a3db6ea2',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'ETH-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x74e4716e431f45807dcf19f284c7aa99f18a4fbc',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'BTCB-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x61eb789d75a95caa3ff50ed7e47b96c132fec082',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'ALPHA-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0xa1faa113cbE53436Df28FF0aEe54275c13B40975',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0xacf47cbeaab5c8a6ee99263cfe43995f89fb3206',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'USDT-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x55d398326f99059fF775485246999027B3197955',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'XRP-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x03f18135c44c64ebfdcbad8297fe5bdafdbbdd86',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'WBNB-UNI',
    chain: 'bsc',
    underlying_tokens: [
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      '0xBf5140A22578168FD562DCcF235E5D43A02ce9B1'
    ],
    pool_address: '0x014608e87af97a054c9a49f81e1473076d51d9a3',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'INJ-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0xa2B726B1145A4773F68593CF171187d8EBe4d495',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x1bdcebca3b93af70b58c41272aea2231754b23ca',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'SXP-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0xd8e2f8b6db204c405543953ef6359912fe3a88d6',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'VAI-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x133ee93fe93320e1182923e1a640912ede17c90c',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'DAI-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x66fdb2eccfb58cf098eaa419e5efde841368e489',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'USDC-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x2354ef4df11afacb85a5c7f98b624072eccddbb1',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'LTC-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x4338665CBB7B2485A8855A139b75D5e34AB0DB94',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x71b01ebddd797c8e9e0b003ea2f4fd207fbf46cc',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'BTCST-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x78650B139471520656b9E7aA7A5e9276814a38e9',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0xb2678c414ebc63c9cc6d1a0fc45f43e249b50fde',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'UST-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x05faf555522fa3f93959f86b41a3808666093210',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'LINA-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x762539b45A1dCcE3D36d080F74d1AED37844b878',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0xc5768c5371568cf1114cddd52caed163a42626ed',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'WBNB-SFP',
    chain: 'bsc',
    underlying_tokens: [
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      '0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb'
    ],
    pool_address: '0x942b294e59a8c47a0f7f20df105b082710f7c305',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'ETH-SUSHI',
    chain: 'bsc',
    underlying_tokens: [
      '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
      '0x947950BcC74888a40Ffa2593C5798F11Fc9124C4'
    ],
    pool_address: '0x16afc4f2ad82986bbe2a4525601f8199ab9c832d',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'IOTX-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x9678E42ceBEb63F23197D726B29b1CB20d0064E5',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0xc13aa76aac067c86ae38028019f414d731b3d86a',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'RAMP-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x8519EA49c997f50cefFa444d240fB655e89248Aa',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0xe834bf723f5bdff34a5d1129f3c31ea4787bc76a',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'WBNB-BELT',
    chain: 'bsc',
    underlying_tokens: [
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      '0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f'
    ],
    pool_address: '0xf3bc6fc080ffcc30d93df48bfa2aa14b869554bb',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'ALICE-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0xAC51066d7bEC65Dc4589368da368b212745d63E8',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0xcad7019d6d84a3294b0494aef02e73bd0f2572eb',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'WBNB-BIFI',
    chain: 'bsc',
    underlying_tokens: [
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      '0xCa3F508B8e4Dd382eE878A314789373D80A5190A'
    ],
    pool_address: '0x3f1a9f3d9aad8bd339ed4853f345d2ef89fbfe0c',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'TKO-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x9f589e3eabe42ebC94A44727b3f3531C0c877809',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0xffd4b200d3c77a0b691b5562d804b3bd54294e6e',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'EPS-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0xA7f552078dcC247C2684336020c03648500C6d9F',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0xdde420cbb3794ebd8ffc3ac69f9c78e5d1411870',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'TLM-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x2222227E22102Fe3322098e4CBfE18cFebD57c95',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0xe6b421a4408c82381b226ab5b6f8c4b639044359',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'ALPACA-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x7752e1fa9f3a2e860856458517008558deb989e3',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'BTCB-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0xf45cd219aef8618a92baa7ad848364a158a24f33',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'DOGE-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0xac109c8025f272414fd9e2faa805a583708a017f',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'HOTCROSS-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x4FA7163E153419E0E1064e418dd7A99314Ed27b6',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0xf23bad605e94de0e3b60c9718a43a94a5af43915',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'Cake-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x804678fa97d91b974ec2af3c843270886528a9e6',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'BUSD-CHR',
    chain: 'bsc',
    underlying_tokens: [
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      '0xf9CeC8d50f6c8ad3Fb6dcCEC577e05aA32B224FE'
    ],
    pool_address: '0x6045931e511ef7e53a4a817f971e0ca28c758809',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'TUSD-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x14016E85a25aeb13065688cAFB43044C2ef86784',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x2e28b9b74d6d99d4697e913b82b41ef1cac51c6c',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'MBOX-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x8fa59693458289914db0097f5f366d771b7a7c3f',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'ETH-BTCB',
    chain: 'bsc',
    underlying_tokens: [
      '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
      '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c'
    ],
    pool_address: '0xd171b26e4484402de70e3ea256be5a2630d7e88d',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'ETH-USDC',
    chain: 'bsc',
    underlying_tokens: [
      '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
      '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d'
    ],
    pool_address: '0xea26b78255df2bbc31c1ebf60010d78670185bd0',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'WOO-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x4691937a7508860F876c9c0a2a617E7d9E945D4B',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x89ee0491ce55d2f7472a97602a95426216167189',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'BSCPAD-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x5A3010d4d8D3B5fB49f8B6E57FB9E48063f16700',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0xba01662e978de7d67f8ffc937726215eb8995d17',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'Cake-USDT',
    chain: 'bsc',
    underlying_tokens: [
      '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      '0x55d398326f99059fF775485246999027B3197955'
    ],
    pool_address: '0xa39af17ce4a8eb807e076805da1e2b8ea7d0755b',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'USDT-USDC',
    chain: 'bsc',
    underlying_tokens: [
      '0x55d398326f99059fF775485246999027B3197955',
      '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d'
    ],
    pool_address: '0xec6557348085aa57c72514d67070dc863c0a5a8c',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'DVI-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x758FB037A375F17c7e195CC634D77dA4F554255B',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x89ebf9cd99864f6e51bd7a578965922029cab977',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'ONE-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x03fF0ff224f904be3118461335064bB48Df47938',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x9d2296e2fe3cdbf2eb3e3e2ca8811bafa42eedff',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'CHESS-USDC',
    chain: 'bsc',
    underlying_tokens: [
      '0x20de22029ab63cf9A7Cf5fEB2b737Ca1eE4c82A6',
      '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d'
    ],
    pool_address: '0x1472976e0b97f5b2fc93f1fff14e2b5c4447b64f',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'AXS-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0xc2d00de94795e60fb76bc37d899170996cbda436',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'C98-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0xaEC945e04baF28b135Fa7c640f624f8D90F1C3a6',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x92247860a03f48d5c6425c7ca35cdcfcb1013aa1',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'SPS-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x1633b7157e7638C4d6593436111Bf125Ee74703F',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0xfdfde3af740a22648b9dd66d05698e5095940850',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'WIN-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0xaeF0d72a118ce24feE3cD1d43d383897D05B4e99',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x6a445ceb72c8b1751755386c3990055ff92e14a0',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'TRX-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x85EAC5Ac2F758618dFa09bDbe0cf174e7d574D5B',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0xb5d108578be3750209d1b3a8f45ffee8c5a75146',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'rUSD-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x07663837218A003e66310a01596af4bf4e44623D',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x59fac9e98479fc9979ae2a0c7422af50bcbb9b26',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'BP-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0xACB8f52DC63BB752a51186D1c55868ADbFfEe9C1',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x2bf2deb40639201c9a94c9e33b4852d9aea5fd2d',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'SFUND-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x477bC8d23c634C154061869478bce96BE6045D12',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x74fa517715c4ec65ef01d55ad5335f90dce7cc87',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'NFT-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x1fC9004eC7E5722891f5f38baE7678efCB11d34D',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x0ecc84c9629317a494f12bc56aa2522475bf32e8',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'WBNB-BETA',
    chain: 'bsc',
    underlying_tokens: [
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      '0xBe1a001FE942f96Eea22bA08783140B9Dcc09D28'
    ],
    pool_address: '0x88a02d94f437799f06f8c256ff07aa397e6d0016',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'LAZIO-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x77d547256A2cD95F32F67aE0313E450Ac200648d',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x11c0b2bb4fbb430825d07507a9e24e4c32f7704d',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'DKT-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x7Ceb519718A80Dd78a8545AD8e7f401dE4f2faA7',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x365c3f921b2915a480308d0b1c04aef7b99c2876',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'FINA-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x426c72701833fdDBdFc06c944737C6031645c708',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x6db23b5360c9d2859fdcbf41c56494e7b8573649',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'DAR-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x23CE9e926048273eF83be0A3A8Ba9Cb6D45cd978',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x062f88e2b4896e823ac78ac314468c29eec4186d',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'XWG-USDC',
    chain: 'bsc',
    underlying_tokens: [
      '0x6b23C89196DeB721e6Fd9726E6C76E4810a464bc',
      '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d'
    ],
    pool_address: '0x936928146a21afccd30dfa84824a780572b1630b',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'PORTO-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x49f2145d6366099e13B10FbF80646C0F377eE7f6',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x0a292e96abb35297786a38fdd67dc4f82689e670',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'QI-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0xf924e642f05acc57fc3b14990c2b1a137683b201',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'SANTOS-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0xA64455a4553C9034236734FadDAddbb64aCE4Cc7',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x06043b346450bbcfde066ebc39fdc264fdffed74',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'IDIA-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x0b15Ddf19D47E6a86A56148fb4aFFFc6929BcB89',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x71e6de81381efe0aa98f56b3b43eb3727d640715',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'THG-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x9fD87aEfe02441B123c3c32466cD9dB4c578618f',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x486697ae24469cb1122f537924aa46e705b142aa',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'WBNB-DPT',
    chain: 'bsc',
    underlying_tokens: [
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      '0xE69cAef10A488D7AF31Da46c89154d025546e990'
    ],
    pool_address: '0x141e9558f66cc21c93628400cca7d830c15c2c24',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'HIGH-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x5f4Bde007Dc06b867f86EBFE4802e34A1fFEEd63',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0xe98ac95a1db2fcaaa9c7d4ba7ecfce4877ca2bea',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'WOOP-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x8b303d5BbfBbf46F1a4d9741E491e06986894e18',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x2ae94a6c768d59f5ddc25bd7f12c7cbe1d51dc04',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'AOG-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x40C8225329Bd3e28A043B029E0D07a5344d2C27C',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x88c9bf5e334e2591c6a866d5e20683e31226be3d',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'BCOIN-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x00e1656e45f18ec6747F5a8496Fd39B50b38396D',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x2eebe0c34da9ba65521e98cbaa7d97496d05f489',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'APX-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x78F5d389F5CDCcFc41594aBaB4B0Ed02F31398b3',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0xa0ee789a8f581cb92dd9742ed0b5d54a0916976c',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'WBNB-Froyo',
    chain: 'bsc',
    underlying_tokens: [
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      '0xe369fec23380f9F14ffD07a1DC4b7c1a9fdD81c9'
    ],
    pool_address: '0x1ce76390dd210b9c9ae28373fdf79714206ecb73',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'FUSE-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x5857c96DaE9cF8511B08Cb07f85753C472D36Ea3',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x6483f166b9e4310a165a55fea04f867499aded06',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'ERTHA-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x62823659d09F9F9D2222058878f89437425eB261',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x70531b39e2bb4d8da59e2ce41a98eba2990f8497',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'RACA-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x12BB890508c125661E03b09EC06E404bc9289040',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x8e744ec2795c8b836689d1b4ebe1489204357dac',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'USDT-ACH',
    chain: 'bsc',
    underlying_tokens: [
      '0x55d398326f99059fF775485246999027B3197955',
      '0xBc7d6B50616989655AfD682fb42743507003056D'
    ],
    pool_address: '0x28bdb16b623176426305a70d8b475be73aca71f3',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'BTT-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x352Cb5E19b12FC216548a2677bD0fce83BaE434B',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0xb7e73daee6a6ca37a21f8e4bfba4da448dfe4d92',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'ERA-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x6f9F0c4ad9Af7EbD61Ac5A1D4e0F2227F7B0E5f9',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x53a63ac301d6410915385294527f947aff616599',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'GMT-USDC',
    chain: 'bsc',
    underlying_tokens: [
      '0x3019BF2a2eF8040C242C9a4c5c4BD4C81678b2A1',
      '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d'
    ],
    pool_address: '0x007ec643c7cc33a70c083fc305c283dd009c8b94',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'Cake-DUET',
    chain: 'bsc',
    underlying_tokens: [
      '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      '0x95EE03e1e2C5c4877f9A298F1C0D6c98698FAB7B'
    ],
    pool_address: '0xbdf0aa1d1985caa357a6ac6661d838da8691c569',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'BSW-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x965F527D9159dCe6288a2219DB51fc6Eef120dD1',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x8ca3ff14a52b080c54a6d1a405eeca02959d39fe',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'Cake-Froyo',
    chain: 'bsc',
    underlying_tokens: [
      '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      '0xe369fec23380f9F14ffD07a1DC4b7c1a9fdD81c9'
    ],
    pool_address: '0x1ccc3cc95c8148477afd18a552f03835be9d182a',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'GMI-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x93D8d25E3C9A847a5Da79F79ecaC89461FEcA846',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x58d4b61983ca0afe6e352e90719f403e24e016f4',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'PEX-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x6a0b66710567b6beb81A71F7e9466450a91a384b',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x5ca96e8bde0bc587dac9e02422fd205b1102daa4',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'TINC-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x05aD6E30A855BE07AfA57e08a4f30d00810a402e',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x0d5b9a0f4315a4bce36d1ea7d6b6d3123167afaa',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'WBNB-CEEK',
    chain: 'bsc',
    underlying_tokens: [
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      '0xe0F94Ac5462997D2BC57287Ac3a3aE4C31345D66'
    ],
    pool_address: '0x046a9b3a9b743340ee2bc4c6ddd35543e237c6c2',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'WBNB-HAPPY',
    chain: 'bsc',
    underlying_tokens: [
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      '0xF5d8A096CcCb31b9D7bcE5afE812BE23e3D4690d'
    ],
    pool_address: '0x008604a38cd589680f7b8f085dc2d5b4f81151db',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'BUSD-WZRD',
    chain: 'bsc',
    underlying_tokens: [
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      '0xFa40d8FC324bcdD6Bbae0e086De886c571C225d4'
    ],
    pool_address: '0xee456d906a38e10680c9d157fff143390e9681ba',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'WBNB-ankrBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      '0xE85aFCcDaFBE7F2B096f268e31ccE3da8dA2990A'
    ],
    pool_address: '0x272c2cf847a49215a3a1d4bff8760e503a06f880',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'BUSD-8PAY',
    chain: 'bsc',
    underlying_tokens: [
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      '0xFeea0bDd3D07eb6FE305938878C0caDBFa169042'
    ],
    pool_address: '0x92c3e2cdddb0ce886bca864151bd4d611a86e563',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'RPG-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0xc2098a8938119A52B1F7661893c0153A6CB116d5',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x55cdb14855220b239cf857a03849d96736b9103f',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'WBNB-GAL',
    chain: 'bsc',
    underlying_tokens: [
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      '0xe4Cc45Bb5DBDA06dB6183E8bf016569f40497Aa5'
    ],
    pool_address: '0xbe6a4f74fddc88853612c50d7404e059b37692d8',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'XCN-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x7324c7C0d95CEBC73eEa7E85CbAac0dBdf88a05b',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0xf01ed80d46759c0cf6a3e9c66856017d81284962',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'WBNB-Metis',
    chain: 'bsc',
    underlying_tokens: [
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      '0xe552Fb52a4F19e44ef5A967632DBc320B0820639'
    ],
    pool_address: '0x69afe59e88614501c3fdeb7480f12dba0a414032',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'MIX-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x398f7827DcCbeFe6990478876bBF3612D93baF05',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x7618fdab208ae23690dadd3aa4a42a442313d24e',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'PEAK-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x630d98424eFe0Ea27fB1b3Ab7741907DFFEaAd78',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x41140a1650372fb8cb2f71e335448ab8cfc1c4f3',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'WBNB-BBT',
    chain: 'bsc',
    underlying_tokens: [
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      '0xD48474E7444727bF500a32D5AbE01943f3A59A64'
    ],
    pool_address: '0x3d5a3e3824da092851026fcda3d8a0b7438c4573',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'NBT-USDT',
    chain: 'bsc',
    underlying_tokens: [
      '0x1D3437E570e93581Bd94b2fd8Fbf202d4a65654A',
      '0x55d398326f99059fF775485246999027B3197955'
    ],
    pool_address: '0x401abd5327542c25bad057614935bfd98186a8a1',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'SDAO-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x90Ed8F1dc86388f14b64ba8fb4bbd23099f18240',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x3d12e4381901a6b94438758b90881cb03f10b01e',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'MHUNT-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x2C717059b366714d267039aF8F59125CAdce6D8c',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x58aed290f42963a502626774bd8fa03f33c9b71f',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'TRIVIA-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0xb465f3cb6Aba6eE375E12918387DE1eaC2301B05',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0xef642c40eebbc964881dd7bd1a0b50e90441e73a',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'OLE-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0xa865197A84E780957422237B5D152772654341F3',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0xe9f369298565b60a0dc19a6fa93cee934fd1a58c',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'XCAD-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x431e0cD023a32532BF3969CddFc002c00E98429d',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x07c10ecfb0e1cf81e3e05ddb693cc114c8ebe498',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'SHELL-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x208cfEc94d2BA8B8537da7A9BB361c6baAD77272',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x02d75d7beebf6d5228a3fa5f810cedf2bea5ab1e',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'Cake-AOG',
    chain: 'bsc',
    underlying_tokens: [
      '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      '0x40C8225329Bd3e28A043B029E0D07a5344d2C27C'
    ],
    pool_address: '0xf8ca29a3bf6d34691981d3ee8d4c9cd1c437efee',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'PEEL-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x734548a9e43d2D564600b1B2ed5bE9C2b911c6aB',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x25bfd3162360bbd8ff97b86169288b311c2a68d7',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'PSTAKE-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x4C882ec256823eE773B25b414d36F92ef58a7c0C',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x009c58e79779982eb53a9941f9f4a2269d093566',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'WBNB-stkBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      '0xc2E9d07F66A89c44062459A47a0D2Dc038E4fb16'
    ],
    pool_address: '0xaa2527ff1893e0d40d4a454623d362b79e8bb7f1',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'HAY-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x0782b6d8c4551B9760e74c0545a9bCD90bdc41E5',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x70c26e9805ec5df3d4ab0b2a3df86bba2231b6c1',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'WOM-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0xAD6742A35fB341A9Cc6ad674738Dd8da98b94Fb1',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0xe68d05418a8d7969d9ca6761ad46f449629d928c',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'SPIN-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x6AA217312960A21aDbde1478DC8cBCf828110A67',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0x89c68051543fa135b31c2ce7bd8cdf392345ff01',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'BUSD-GQ',
    chain: 'bsc',
    underlying_tokens: [
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      '0xF700D4c708C2be1463E355F337603183D20E0808'
    ],
    pool_address: '0x72121d60b0e2f01c0fb7fe32ca24021b42165a40',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'MONI-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x9573c88aE3e37508f87649f87c4dd5373C9F31e0',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0xbcfd0d4a37feb4dceaaefa9da28cd833e5f04e9f',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'BUSD-HOOP',
    chain: 'bsc',
    underlying_tokens: [
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      '0xF19cfb40B3774dF6Eed83169Ad5aB0Aaf6865F25'
    ],
    pool_address: '0xde8a4f457af12f98db090841579feed384684819',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'CO-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x936B6659Ad0C1b244Ba8Efe639092acae30dc8d6',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x800946d29e40199963100d67c9265b1725f80333',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'ARV-WBNB',
    chain: 'bsc',
    underlying_tokens: [
      '0x6679eB24F59dFe111864AEc72B443d1Da666B360',
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
    ],
    pool_address: '0xa63e32feefc6590bbf869070fd2e706eb7881bd2',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'KRS-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x37b53894e7429f794B56F22a32E1695567Ee9913',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0xac747ad9d61884986ad7a4a6cc5de998ce21b253',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'WMX-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0xa75d9ca2a0a1D547409D82e1B06618EC284A2CeD',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0xe86eaad81c32ffbb88b7ec9b325c8f75c8c9f1ab',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'MGP-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0xD06716E1Ff2E492Cc5034c2E81805562dd3b45fa',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x76b0d10a4540b6743aa086ea31dc48e8ab691c4d',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'Cake-XCAD',
    chain: 'bsc',
    underlying_tokens: [
      '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      '0x431e0cD023a32532BF3969CddFc002c00E98429d'
    ],
    pool_address: '0x50e4837fc2eeffd34ef78483a89c6afb7dd70c77',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'Cake-HOOK',
    chain: 'bsc',
    underlying_tokens: [
      '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      '0xa260E12d2B924cb899AE80BB58123ac3fEE1E2F0'
    ],
    pool_address: '0x9e9b768174ef24233bf8ac2f4131f10ff5e72dee',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: [],
    metadata: {}
  },
  {
    name: 'HFT-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0x44Ec807ce2F4a6F2737A92e985f318d035883e47',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0xc9853537dc498f4667f9e50bf2be6abef9d53149',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'Cake-SQUAD',
    chain: 'bsc',
    underlying_tokens: [
      '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      '0x724A32dFFF9769A0a0e1F0515c0012d1fB14c3bd'
    ],
    pool_address: '0x54cd9d6ce45cef4fcc1ac568329254661b28711d',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'Cake-ZBC',
    chain: 'bsc',
    underlying_tokens: [
      '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      '0x37a56cdcD83Dce2868f721De58cB3830C44C6303'
    ],
    pool_address: '0x269043694d070e8811c620bf95485314bcc7b4b7',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  },
  {
    name: 'PRIMAL-BUSD',
    chain: 'bsc',
    underlying_tokens: [
      '0xCb5327Ed4649548e0d73E70b633cdfd99aF6Da87',
      '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    ],
    pool_address: '0x4d4310f465c6db2081c3d24fa3b571cb29abddb7',
    investing_address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
    staking_address: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
    boosting_address: null,
    distributor_address: null,
    rewards_tokens: ['0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'],
    metadata: {}
  }
]

module.exports = POOLS
