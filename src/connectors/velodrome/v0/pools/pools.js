const POOLS = [
  {
    name: 'Pool USDC/sUSD',
    chain: 'optimism',
    underlying_tokens: [
      '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
      '0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9'
    ],
    pool_address: '0xd16232ad60188b68076a235c65d692090caba155',
    investing_address: '0x9c12939390052919af3155f41bf4160fd3666a6f',
    staking_address: '0xb03f52d2db3e758dd49982defd6aeefea9454e80',
    boosting_address: null,
    distributor_address: '0xb03f52d2db3e758dd49982defd6aeefea9454e80',
    rewards_tokens: [
      '0x4200000000000000000000000000000000000042',
      '0x3c8B650257cFb5f272f799F5e2b4e65093a11a05'
    ],
    metadata: { stable: true }
  },
  {
    name: 'Pool wstETH/WETH',
    chain: 'optimism',
    underlying_tokens: [
      '0x1f32b1c2345538c0c6f582fcb022739c4a194ebb',
      '0x4200000000000000000000000000000000000006'
    ],
    pool_address: '0xbf205335de602ac38244f112d712ab04cb59a498',
    investing_address: '0x9c12939390052919af3155f41bf4160fd3666a6f',
    staking_address: '0x131ae347e654248671afc885f0767cb605c065d7',
    boosting_address: null,
    distributor_address: '0x131ae347e654248671afc885f0767cb605c065d7',
    rewards_tokens: [
      '0x4200000000000000000000000000000000000042',
      '0x3c8B650257cFb5f272f799F5e2b4e65093a11a05'
    ],
    metadata: { stable: true }
  },
  {
    name: 'Pool USDC/DOLA',
    chain: 'optimism',
    underlying_tokens: [
      '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
      '0x8ae125e8653821e851f12a49f7765db9a9ce7384'
    ],
    pool_address: '0x6c5019d345ec05004a7e7b0623a91a0d9b8d590d',
    investing_address: '0x9c12939390052919af3155f41bf4160fd3666a6f',
    staking_address: '0xafd2c84b9d1cd50e7e18a55e419749a6c9055e1f',
    boosting_address: null,
    distributor_address: '0xafd2c84b9d1cd50e7e18a55e419749a6c9055e1f',
    rewards_tokens: [
      '0x4200000000000000000000000000000000000042',
      '0x3c8B650257cFb5f272f799F5e2b4e65093a11a05'
    ],
    metadata: { stable: true }
  },
  {
    name: 'Pool WETH/sETH',
    chain: 'optimism',
    underlying_tokens: [
      '0x4200000000000000000000000000000000000006',
      '0xe405de8f52ba7559f9df3c368500b6e6ae6cee49'
    ],
    pool_address: '0xfd7fddfc0a729ecf45fb6b12fa3b71a575e1966f',
    investing_address: '0x9c12939390052919af3155f41bf4160fd3666a6f',
    staking_address: '0x101d5e5651d7f949154258c1c7516da1ec273476',
    boosting_address: null,
    distributor_address: '0x101d5e5651d7f949154258c1c7516da1ec273476',
    rewards_tokens: [
      '0x4200000000000000000000000000000000000042',
      '0x3c8B650257cFb5f272f799F5e2b4e65093a11a05'
    ],
    metadata: { stable: true }
  },
  {
    name: 'Pool USDC/MAI',
    chain: 'optimism',
    underlying_tokens: [
      '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
      '0xdfa46478f9e5ea86d57387849598dbfb2e964b02'
    ],
    pool_address: '0xd62c9d8a3d4fd98b27caaefe3571782a3af0a737',
    investing_address: '0x9c12939390052919af3155f41bf4160fd3666a6f',
    staking_address: '0xdf479e13e71ce207ce1e58d6f342c039c3d90b7d',
    boosting_address: null,
    distributor_address: '0xdf479e13e71ce207ce1e58d6f342c039c3d90b7d',
    rewards_tokens: [
      '0x4200000000000000000000000000000000000042',
      '0x3c8B650257cFb5f272f799F5e2b4e65093a11a05'
    ],
    metadata: { stable: true }
  },
  {
    name: 'Pool sUSD/LUSD',
    chain: 'optimism',
    underlying_tokens: [
      '0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9',
      '0xc40f949f8a4e094d1b49a23ea9241d289b7b2819'
    ],
    pool_address: '0x0d693efd716021878d5979fab4cf8f6c1b7ce450',
    investing_address: '0x9c12939390052919af3155f41bf4160fd3666a6f',
    staking_address: '0x1d37704877e38b48f4600c20ac8e5efec768094a',
    boosting_address: null,
    distributor_address: '0x1d37704877e38b48f4600c20ac8e5efec768094a',
    rewards_tokens: [
      '0x4200000000000000000000000000000000000042',
      '0x3c8B650257cFb5f272f799F5e2b4e65093a11a05'
    ],
    metadata: { stable: true }
  },
  {
    name: 'Pool USD+/USDC',
    chain: 'optimism',
    underlying_tokens: [
      '0x73cb180bf0521828d8849bc8cf2b920918e23032',
      '0x7f5c764cbc14f9669b88837ca1490cca17c31607'
    ],
    pool_address: '0x67124355cce2ad7a8ea283e990612ebe12730175',
    investing_address: '0x9c12939390052919af3155f41bf4160fd3666a6f',
    staking_address: '0xd2d95775d35a6d492ced7c7e26817aacb7d264f2',
    boosting_address: null,
    distributor_address: '0xd2d95775d35a6d492ced7c7e26817aacb7d264f2',
    rewards_tokens: [
      '0x4200000000000000000000000000000000000042',
      '0x3c8B650257cFb5f272f799F5e2b4e65093a11a05'
    ],
    metadata: { stable: true }
  },
  {
    name: 'Pool VELO/USDC',
    chain: 'optimism',
    underlying_tokens: [
      '0x3c8b650257cfb5f272f799f5e2b4e65093a11a05',
      '0x7f5c764cbc14f9669b88837ca1490cca17c31607'
    ],
    pool_address: '0xe8537b6ff1039cb9ed0b71713f697ddbadbb717d',
    investing_address: '0x9c12939390052919af3155f41bf4160fd3666a6f',
    staking_address: '0x6b8edc43de878fd5cd5113c42747d32500db3873',
    boosting_address: null,
    distributor_address: '0x6b8edc43de878fd5cd5113c42747d32500db3873',
    rewards_tokens: [
      '0x4200000000000000000000000000000000000042',
      '0x3c8B650257cFb5f272f799F5e2b4e65093a11a05'
    ],
    metadata: { stable: false }
  },
  {
    name: 'Pool USDC/MIM',
    chain: 'optimism',
    underlying_tokens: [
      '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
      '0xb153fb3d196a8eb25522705560ac152eeec57901'
    ],
    pool_address: '0x29a20ca4968d756c7d0922a7064a1a56f4624e9a',
    investing_address: '0x9c12939390052919af3155f41bf4160fd3666a6f',
    staking_address: '0x330c3c1e493a95bf45bc0147c5f68d983a9d4e00',
    boosting_address: null,
    distributor_address: '0x330c3c1e493a95bf45bc0147c5f68d983a9d4e00',
    rewards_tokens: [
      '0x4200000000000000000000000000000000000042',
      '0x3c8B650257cFb5f272f799F5e2b4e65093a11a05'
    ],
    metadata: { stable: true }
  },
  {
    name: 'Pool WETH/USDC',
    chain: 'optimism',
    underlying_tokens: [
      '0x4200000000000000000000000000000000000006',
      '0x7f5c764cbc14f9669b88837ca1490cca17c31607'
    ],
    pool_address: '0x79c912fef520be002c2b6e57ec4324e260f38e50',
    investing_address: '0x9c12939390052919af3155f41bf4160fd3666a6f',
    staking_address: '0xe2cec8ab811b648ba7b1691ce08d5e800dd0a60a',
    boosting_address: null,
    distributor_address: '0xe2cec8ab811b648ba7b1691ce08d5e800dd0a60a',
    rewards_tokens: [
      '0x4200000000000000000000000000000000000042',
      '0x3c8B650257cFb5f272f799F5e2b4e65093a11a05'
    ],
    metadata: { stable: false }
  },
  {
    name: 'Pool USDC/SNX',
    chain: 'optimism',
    underlying_tokens: [
      '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
      '0x8700daec35af8ff88c16bdf0418774cb3d7599b4'
    ],
    pool_address: '0x9056eb7ca982a5dd65a584189994e6a27318067d',
    investing_address: '0x9c12939390052919af3155f41bf4160fd3666a6f',
    staking_address: '0x099b3368eb5bbe6f67f14a791ecaef8bc1628a7f',
    boosting_address: null,
    distributor_address: '0x099b3368eb5bbe6f67f14a791ecaef8bc1628a7f',
    rewards_tokens: [
      '0x4200000000000000000000000000000000000042',
      '0x3c8B650257cFb5f272f799F5e2b4e65093a11a05'
    ],
    metadata: { stable: false }
  },
  {
    name: 'Pool OP/USDC',
    chain: 'optimism',
    underlying_tokens: [
      '0x4200000000000000000000000000000000000042',
      '0x7f5c764cbc14f9669b88837ca1490cca17c31607'
    ],
    pool_address: '0x47029bc8f5cbe3b464004e87ef9c9419a48018cd',
    investing_address: '0x9c12939390052919af3155f41bf4160fd3666a6f',
    staking_address: '0x0299d40e99f2a5a1390261f5a71d13c3932e214c',
    boosting_address: null,
    distributor_address: '0x0299d40e99f2a5a1390261f5a71d13c3932e214c',
    rewards_tokens: [
      '0x4200000000000000000000000000000000000042',
      '0x3c8B650257cFb5f272f799F5e2b4e65093a11a05'
    ],
    metadata: { stable: false }
  },
  {
    name: 'Pool USDC/USX',
    chain: 'optimism',
    underlying_tokens: [
      '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
      '0xbfd291da8a403daaf7e5e9dc1ec0aceacd4848b9'
    ],
    pool_address: '0x5edac6b8ea08d535c01981d75b3361481c0ee999',
    investing_address: '0x9c12939390052919af3155f41bf4160fd3666a6f',
    staking_address: '0xaea343b1ef5ecfa0d252d7078425bac047cf5d18',
    boosting_address: null,
    distributor_address: '0xaea343b1ef5ecfa0d252d7078425bac047cf5d18',
    rewards_tokens: [
      '0x4200000000000000000000000000000000000042',
      '0x3c8B650257cFb5f272f799F5e2b4e65093a11a05'
    ],
    metadata: { stable: true }
  },
  {
    name: 'Pool USDC/DAI',
    chain: 'optimism',
    underlying_tokens: [
      '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
      '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1'
    ],
    pool_address: '0x4f7ebc19844259386dbddb7b2eb759eefc6f8353',
    investing_address: '0x9c12939390052919af3155f41bf4160fd3666a6f',
    staking_address: '0xc4ff55a961bc04b880e60219ccbbdd139c6451a4',
    boosting_address: null,
    distributor_address: '0xc4ff55a961bc04b880e60219ccbbdd139c6451a4',
    rewards_tokens: [
      '0x4200000000000000000000000000000000000042',
      '0x3c8B650257cFb5f272f799F5e2b4e65093a11a05'
    ],
    metadata: { stable: true }
  },
  {
    name: 'Pool WETH/OP',
    chain: 'optimism',
    underlying_tokens: [
      '0x4200000000000000000000000000000000000006',
      '0x4200000000000000000000000000000000000042'
    ],
    pool_address: '0xcdd41009e74bd1ae4f7b2eecf892e4bc718b9302',
    investing_address: '0x9c12939390052919af3155f41bf4160fd3666a6f',
    staking_address: '0x2f733b00127449fcf8b5a195bc51abb73b7f7a75',
    boosting_address: null,
    distributor_address: '0x2f733b00127449fcf8b5a195bc51abb73b7f7a75',
    rewards_tokens: [
      '0x4200000000000000000000000000000000000042',
      '0x3c8B650257cFb5f272f799F5e2b4e65093a11a05'
    ],
    metadata: { stable: false }
  },
  {
    name: 'Pool WETH/rETH',
    chain: 'optimism',
    underlying_tokens: [
      '0x4200000000000000000000000000000000000006',
      '0x9bcef72be871e61ed4fbbc7630889bee758eb81d'
    ],
    pool_address: '0x69f795e2d9249021798645d784229e5bec2a5a25',
    investing_address: '0x9c12939390052919af3155f41bf4160fd3666a6f',
    staking_address: '0xb857d9f07df28423e35537c13ec0857a07ee855e',
    boosting_address: null,
    distributor_address: '0xb857d9f07df28423e35537c13ec0857a07ee855e',
    rewards_tokens: [
      '0x4200000000000000000000000000000000000042',
      '0x3c8B650257cFb5f272f799F5e2b4e65093a11a05'
    ],
    metadata: { stable: true }
  },
  {
    name: 'Pool alETH/WETH',
    chain: 'optimism',
    underlying_tokens: [
      '0x3e29d3a9316dab217754d13b28646b76607c5f04',
      '0x4200000000000000000000000000000000000006'
    ],
    pool_address: '0x6fd5bee1ddb4dbbb0b7368b080ab99b8ba765902',
    investing_address: '0x9c12939390052919af3155f41bf4160fd3666a6f',
    staking_address: '0xef9a5ff5d3057d539543bc223efccbc2168b19d6',
    boosting_address: null,
    distributor_address: '0xef9a5ff5d3057d539543bc223efccbc2168b19d6',
    rewards_tokens: [
      '0x4200000000000000000000000000000000000042',
      '0x3c8B650257cFb5f272f799F5e2b4e65093a11a05'
    ],
    metadata: { stable: true }
  },
  {
    name: 'Pool USDC/USDT',
    chain: 'optimism',
    underlying_tokens: [
      '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
      '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58'
    ],
    pool_address: '0xe08d427724d8a2673fe0be3a81b7db17be835b36',
    investing_address: '0x9c12939390052919af3155f41bf4160fd3666a6f',
    staking_address: '0x654f9e476865ce72ef2fb73861c03804aa5208d1',
    boosting_address: null,
    distributor_address: '0x654f9e476865ce72ef2fb73861c03804aa5208d1',
    rewards_tokens: [
      '0x4200000000000000000000000000000000000042',
      '0x3c8B650257cFb5f272f799F5e2b4e65093a11a05'
    ],
    metadata: { stable: true }
  },
  {
    name: 'Pool USDC/LUSD',
    chain: 'optimism',
    underlying_tokens: [
      '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
      '0xc40f949f8a4e094d1b49a23ea9241d289b7b2819'
    ],
    pool_address: '0x207addb05c548f262219f6bfc6e11c02d0f7fdbe',
    investing_address: '0x9c12939390052919af3155f41bf4160fd3666a6f',
    staking_address: '0x631dce3a422e1af1ad9d3952b06f9320e2f2ed72',
    boosting_address: null,
    distributor_address: '0x631dce3a422e1af1ad9d3952b06f9320e2f2ed72',
    rewards_tokens: [
      '0x4200000000000000000000000000000000000042',
      '0x3c8B650257cFb5f272f799F5e2b4e65093a11a05'
    ],
    metadata: { stable: true }
  }
]

/// pools
async function pools () {
  return POOLS
}

module.exports = pools
