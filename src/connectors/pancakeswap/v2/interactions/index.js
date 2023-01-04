/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const ROUTERABI = require('../abi/ROUTER');
const STAKERABI = require('../abi/STAKER');

const PID = {
  '0xa104dafde23cb7d40e5af89ef39b74713e2d566c': 0,
  '0x886566e408efbd557b031ef6733e8265a848279c': 1,
  '0x0ed7e52944161450477ee417de9cd3a859b14fd0': 2,
  '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16': 3,
  '0x28415ff2c35b65b9e5c7de82126b4015ab9d031f': 4,
  '0xdd5bad8f8b360d76d12fda230f8baf42fe0022cf': 5,
  '0x824eb9fadfb377394430d2744fa7c42916de3ece': 6,
  '0x7efaef62fddcca950418312c6c91aef321375a00': 7,
  '0x3dcb1787a95d2ea0eb7d00887704eebf0d79bb13': 8,
  '0x7eb5d86fd78f3852a3e0e064f2842d45a3db6ea2': 9,
  '0x74e4716e431f45807dcf19f284c7aa99f18a4fbc': 10,
  '0x61eb789d75a95caa3ff50ed7e47b96c132fec082': 11,
  '0xacf47cbeaab5c8a6ee99263cfe43995f89fb3206': 12,
  '0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae': 13,
  '0x03f18135c44c64ebfdcbad8297fe5bdafdbbdd86': 14,
  '0x014608e87af97a054c9a49f81e1473076d51d9a3': 15,
  '0x1bdcebca3b93af70b58c41272aea2231754b23ca': 16,
  '0xd8e2f8b6db204c405543953ef6359912fe3a88d6': 17,
  '0x133ee93fe93320e1182923e1a640912ede17c90c': 18,
  '0x66fdb2eccfb58cf098eaa419e5efde841368e489': 19,
  '0x2354ef4df11afacb85a5c7f98b624072eccddbb1': 20,
  '0x71b01ebddd797c8e9e0b003ea2f4fd207fbf46cc': 21,
  '0xb2678c414ebc63c9cc6d1a0fc45f43e249b50fde': 22,
  '0x05faf555522fa3f93959f86b41a3808666093210': 23,
  '0xc5768c5371568cf1114cddd52caed163a42626ed': 24,
  '0x942b294e59a8c47a0f7f20df105b082710f7c305': 25,
  '0x16afc4f2ad82986bbe2a4525601f8199ab9c832d': 26,
  '0xc13aa76aac067c86ae38028019f414d731b3d86a': 27,
  '0xe834bf723f5bdff34a5d1129f3c31ea4787bc76a': 28,
  '0xf3bc6fc080ffcc30d93df48bfa2aa14b869554bb': 29,
  '0xcad7019d6d84a3294b0494aef02e73bd0f2572eb': 30,
  '0x3f1a9f3d9aad8bd339ed4853f345d2ef89fbfe0c': 31,
  '0xffd4b200d3c77a0b691b5562d804b3bd54294e6e': 32,
  '0xdde420cbb3794ebd8ffc3ac69f9c78e5d1411870': 33,
  '0xe6b421a4408c82381b226ab5b6f8c4b639044359': 34,
  '0x7752e1fa9f3a2e860856458517008558deb989e3': 35,
  '0xf45cd219aef8618a92baa7ad848364a158a24f33': 36,
  '0xac109c8025f272414fd9e2faa805a583708a017f': 37,
  '0xf23bad605e94de0e3b60c9718a43a94a5af43915': 38,
  '0x804678fa97d91b974ec2af3c843270886528a9e6': 39,
  '0x6045931e511ef7e53a4a817f971e0ca28c758809': 40,
  '0x2e28b9b74d6d99d4697e913b82b41ef1cac51c6c': 41,
  '0x8fa59693458289914db0097f5f366d771b7a7c3f': 42,
  '0xd171b26e4484402de70e3ea256be5a2630d7e88d': 43,
  '0xea26b78255df2bbc31c1ebf60010d78670185bd0': 44,
  '0x89ee0491ce55d2f7472a97602a95426216167189': 45,
  '0xba01662e978de7d67f8ffc937726215eb8995d17': 46,
  '0xa39af17ce4a8eb807e076805da1e2b8ea7d0755b': 47,
  '0xec6557348085aa57c72514d67070dc863c0a5a8c': 48,
  '0x89ebf9cd99864f6e51bd7a578965922029cab977': 49,
  '0x9d2296e2fe3cdbf2eb3e3e2ca8811bafa42eedff': 50,
  '0x1472976e0b97f5b2fc93f1fff14e2b5c4447b64f': 51,
  '0xc2d00de94795e60fb76bc37d899170996cbda436': 52,
  '0x92247860a03f48d5c6425c7ca35cdcfcb1013aa1': 53,
  '0xfdfde3af740a22648b9dd66d05698e5095940850': 54,
  '0x6a445ceb72c8b1751755386c3990055ff92e14a0': 55,
  '0xb5d108578be3750209d1b3a8f45ffee8c5a75146': 56,
  '0x59fac9e98479fc9979ae2a0c7422af50bcbb9b26': 57,
  '0x2bf2deb40639201c9a94c9e33b4852d9aea5fd2d': 58,
  '0x74fa517715c4ec65ef01d55ad5335f90dce7cc87': 59,
  '0x0ecc84c9629317a494f12bc56aa2522475bf32e8': 60,
  '0x88a02d94f437799f06f8c256ff07aa397e6d0016': 61,
  '0x11c0b2bb4fbb430825d07507a9e24e4c32f7704d': 62,
  '0x365c3f921b2915a480308d0b1c04aef7b99c2876': 63,
  '0x6db23b5360c9d2859fdcbf41c56494e7b8573649': 64,
  '0x062f88e2b4896e823ac78ac314468c29eec4186d': 65,
  '0x936928146a21afccd30dfa84824a780572b1630b': 66,
  '0x0a292e96abb35297786a38fdd67dc4f82689e670': 67,
  '0xf924e642f05acc57fc3b14990c2b1a137683b201': 68,
  '0x06043b346450bbcfde066ebc39fdc264fdffed74': 69,
  '0x71e6de81381efe0aa98f56b3b43eb3727d640715': 70,
  '0x486697ae24469cb1122f537924aa46e705b142aa': 71,
  '0x141e9558f66cc21c93628400cca7d830c15c2c24': 72,
  '0xe98ac95a1db2fcaaa9c7d4ba7ecfce4877ca2bea': 73,
  '0x2ae94a6c768d59f5ddc25bd7f12c7cbe1d51dc04': 74,
  '0x88c9bf5e334e2591c6a866d5e20683e31226be3d': 75,
  '0x2eebe0c34da9ba65521e98cbaa7d97496d05f489': 76,
  '0xa0ee789a8f581cb92dd9742ed0b5d54a0916976c': 77,
  '0x1ce76390dd210b9c9ae28373fdf79714206ecb73': 78,
  '0x6483f166b9e4310a165a55fea04f867499aded06': 79,
  '0x70531b39e2bb4d8da59e2ce41a98eba2990f8497': 80,
  '0x8e744ec2795c8b836689d1b4ebe1489204357dac': 81,
  '0x28bdb16b623176426305a70d8b475be73aca71f3': 82,
  '0xb7e73daee6a6ca37a21f8e4bfba4da448dfe4d92': 83,
  '0x53a63ac301d6410915385294527f947aff616599': 84,
  '0x007ec643c7cc33a70c083fc305c283dd009c8b94': 85,
  '0xbdf0aa1d1985caa357a6ac6661d838da8691c569': 86,
  '0x8ca3ff14a52b080c54a6d1a405eeca02959d39fe': 87,
  '0x1ccc3cc95c8148477afd18a552f03835be9d182a': 88,
  '0x58d4b61983ca0afe6e352e90719f403e24e016f4': 89,
  '0x5ca96e8bde0bc587dac9e02422fd205b1102daa4': 90,
  '0x0d5b9a0f4315a4bce36d1ea7d6b6d3123167afaa': 91,
  '0x046a9b3a9b743340ee2bc4c6ddd35543e237c6c2': 92,
  '0x008604a38cd589680f7b8f085dc2d5b4f81151db': 93,
  '0xee456d906a38e10680c9d157fff143390e9681ba': 94,
  '0x272c2cf847a49215a3a1d4bff8760e503a06f880': 95,
  '0x92c3e2cdddb0ce886bca864151bd4d611a86e563': 96,
  '0x55cdb14855220b239cf857a03849d96736b9103f': 97,
  '0xbe6a4f74fddc88853612c50d7404e059b37692d8': 98,
  '0xf01ed80d46759c0cf6a3e9c66856017d81284962': 99,
  '0x69afe59e88614501c3fdeb7480f12dba0a414032': 100,
  '0x7618fdab208ae23690dadd3aa4a42a442313d24e': 101,
  '0x41140a1650372fb8cb2f71e335448ab8cfc1c4f3': 102,
  '0x3d5a3e3824da092851026fcda3d8a0b7438c4573': 103,
  '0x401abd5327542c25bad057614935bfd98186a8a1': 104,
  '0x3d12e4381901a6b94438758b90881cb03f10b01e': 105,
  '0x58aed290f42963a502626774bd8fa03f33c9b71f': 106,
  '0xef642c40eebbc964881dd7bd1a0b50e90441e73a': 107,
  '0xe9f369298565b60a0dc19a6fa93cee934fd1a58c': 108,
  '0x07c10ecfb0e1cf81e3e05ddb693cc114c8ebe498': 109,
  '0x02d75d7beebf6d5228a3fa5f810cedf2bea5ab1e': 110,
  '0xf8ca29a3bf6d34691981d3ee8d4c9cd1c437efee': 111,
  '0x25bfd3162360bbd8ff97b86169288b311c2a68d7': 112,
  '0x009c58e79779982eb53a9941f9f4a2269d093566': 113,
  '0xaa2527ff1893e0d40d4a454623d362b79e8bb7f1': 114,
  '0x70c26e9805ec5df3d4ab0b2a3df86bba2231b6c1': 115,
  '0xe68d05418a8d7969d9ca6761ad46f449629d928c': 116,
  '0x89c68051543fa135b31c2ce7bd8cdf392345ff01': 117,
  '0x72121d60b0e2f01c0fb7fe32ca24021b42165a40': 118,
  '0xbcfd0d4a37feb4dceaaefa9da28cd833e5f04e9f': 119,
  '0xde8a4f457af12f98db090841579feed384684819': 120,
  '0xb6040a9f294477ddadf5543a24e5463b8f2423ae': 121,
  '0x800946d29e40199963100d67c9265b1725f80333': 122,
  '0xa63e32feefc6590bbf869070fd2e706eb7881bd2': 123,
  '0x8ee80363a98a315cfa249323c7f91067b7e1d2f3': 124,
  '0xd2cf22a662d2b3f712501b4bd9cb4b564e5cc85a': 125,
  '0x90a4e19d743273d7dfe4aeb2d3a28e794ad6e72e': 126,
  '0xac747ad9d61884986ad7a4a6cc5de998ce21b253': 127,
  '0xe86eaad81c32ffbb88b7ec9b325c8f75c8c9f1ab': 128,
  '0x76b0d10a4540b6743aa086ea31dc48e8ab691c4d': 129,
  '0x50e4837fc2eeffd34ef78483a89c6afb7dd70c77': 130,
  '0x9e9b768174ef24233bf8ac2f4131f10ff5e72dee': 131,
  '0xc9853537dc498f4667f9e50bf2be6abef9d53149': 132,
  '0x36842f8fb99d55477c0da638af5ceb6bbf86aa98': 133,
  '0x1a77c359d0019cd8f4d36b7cdf5a88043d801072': 134,
  '0xee1bcc9f1692e81a281b3a302a4b67890ba4be76': 135,
  '0xa5aaa9974b7e52e2b9f7a2e16d91236d70b5d692': 136,
  '0x657f0675c67627f91ea6c6f35785489b3af77ee2': 137,
  '0x54cd9d6ce45cef4fcc1ac568329254661b28711d': 138,
  '0x269043694d070e8811c620bf95485314bcc7b4b7': 139,
  '0x4d4310f465c6db2081c3d24fa3b571cb29abddb7': 140,
};

async function deposit(
  pool_name,
  chain,
  underlying_tokens,
  pool_address,
  investing_address,
  staking_address,
  boosting_address,
  distributor_address,
  rewards_tokens,
  metadata,
  amountNotBN,
  amountsDesiredNotBN,
  amountsMinimumNotBN,
  ranges,
  rangeToken,
  userAddress,
  receiverAddress,
  lockupTimestamp,
  deadline
) {
  const abi = ROUTERABI;
  const tokenA = underlying_tokens[0];
  const tokenB = underlying_tokens[1];
  const interaction_address = pool_address;
  let method_name = '';
  let args = [];
  let nativeTokenPosition = -1;
  let tokenPosition = -1;
  if (tokenA === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
    nativeTokenPosition = 0;
    tokenPosition = 1;
  }
  if (tokenB === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
    nativeTokenPosition = 1;
    tokenPosition = 0;
  }

  if (nativeTokenPosition !== -1) {
    method_name = 'addLiquidityETH';
    const amountDesired = await toBnERC20Decimals(
      amountsDesiredNotBN[tokenPosition],
      chain,
      underlying_tokens[tokenPosition]
    );
    const amountMin = await toBnERC20Decimals(
      amountsMinimumNotBN[tokenPosition],
      chain,
      underlying_tokens[tokenPosition]
    );
    const amountNativeMin = await toBnERC20Decimals(
      amountsMinimumNotBN[nativeTokenPosition],
      chain,
      underlying_tokens[nativeTokenPosition]
    );
    args = [
      underlying_tokens[tokenPosition],
      amountDesired,
      amountMin,
      amountNativeMin,
      receiverAddress,
      deadline,
    ];
  } else {
    method_name = 'addLiquidity';
    const amountADesired = await toBnERC20Decimals(
      amountsDesiredNotBN[0],
      chain,
      underlying_tokens[0]
    );
    const amountBDesired = await toBnERC20Decimals(
      amountsDesiredNotBN[1],
      chain,
      underlying_tokens[1]
    );
    const amountAMinimum = await toBnERC20Decimals(
      amountsMinimumNotBN[0],
      chain,
      underlying_tokens[0]
    );
    const amountBMinimum = await toBnERC20Decimals(
      amountsMinimumNotBN[1],
      chain,
      underlying_tokens[1]
    );
    args = [
      tokenA,
      tokenB,
      amountADesired,
      amountBDesired,
      amountAMinimum,
      amountBMinimum,
      receiverAddress,
      deadline,
    ];
  }

  return {
    abi: abi, //json file name
    method_name: method_name, //method to interact with the pool
    position_token: underlying_tokens, // token needed to approve
    position_token_type: 'ERC-20', //token type to approve
    interaction_address: interaction_address, // contract to interact with to interact with poolAddress
    args: args, //args to pass to the smart contracts to trigger 'method_name'
  };
}

/// redeem
async function redeem(
  pool_name,
  chain,
  underlying_tokens,
  pool_address,
  investing_address,
  staking_address,
  boosting_address,
  distributor_address,
  rewards_tokens,
  metadata,
  amountNotBN,
  amountsDesired,
  amountsMinimum,
  ranges,
  rangeToken,
  userAddress,
  receiverAddress,
  lockupTimestamp,
  deadline
) {
  const abi = PoolABI;
  const method_name = 'removeLiquidity';
  const tokenA = underlying_tokens[0];
  const tokenB = underlying_tokens[1];
  const interaction_address = pool_address;
  const amountBN = await toBnERC20Decimals(amountNotBN, chain, pool_address);
  const amountAMinimum = await toBnERC20Decimals(
    amountsMinimumNotBN[0],
    chain,
    underlying_tokens[0]
  );
  const amountBMinimum = await toBnERC20Decimals(
    amountsMinimumNotBN[1],
    chain,
    underlying_tokens[1]
  );
  const args = [
    tokenA,
    tokenB,
    amountBN,
    amountAMinimum,
    amountBMinimum,
    receiverAddress,
    deadline,
  ];

  return {
    abi: abi, //json file name
    method_name: method_name, //method to interact with the pool
    position_token: pool_address, // token needed to approve
    position_token_type: 'ERC-20', //token type to approve
    interaction_address: interaction_address, // contract to interact with to interact with poolAddress
    args: args, //args to pass to the smart contracts to trigger 'method_name'
  };
}

/// stake
async function stake(
  pool_name,
  chain,
  underlying_tokens,
  pool_address,
  investing_address,
  staking_address,
  boosting_address,
  distributor_address,
  rewards_tokens,
  metadata,
  amountNotBN,
  amountsDesired,
  amountsMinimum,
  ranges,
  rangeToken,
  userAddress,
  receiverAddress,
  lockupTimestamp,
  deadline
) {
  const pid = PID[pool_address.toLowerCase()];
  const interaction_address = '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652';
  const amountBN = await toBnERC20Decimals(amountNotBN, chain, pool_address);
  const abi = STAKERABI;
  const method_name = 'deposit';
  const args = [pid, amountBN];

  return {
    abi: abi, //json file name
    method_name: method_name, //method to interact with the pool
    position_token: pool_address, // token needed to approve
    position_token_type: 'ERC-20', //token type to approve
    interaction_address: interaction_address, // contract to interact with to interact with poolAddress
    args: args, //args to pass to the smart contracts to trigger 'method_name'
  };
}

/// unstake
async function unstake(
  pool_name,
  chain,
  underlying_tokens,
  pool_address,
  investing_address,
  staking_address,
  boosting_address,
  distributor_address,
  rewards_tokens,
  metadata,
  amountNotBN,
  amountsDesired,
  amountsMinimum,
  ranges,
  rangeToken,
  userAddress,
  receiverAddress,
  lockupTimestamp,
  deadline
) {
  const pid = PID[pool_address.toLowerCase()];
  const interaction_address = '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652';
  const amountBN = await toBnERC20Decimals(amountNotBN, chain, pool_address);
  const abi = STAKERABI;
  const method_name = 'withdraw';
  const args = [pid, amountBN];

  return {
    abi: abi, //json file name
    method_name: method_name, //method to interact with the pool
    position_token: null, // token needed to approve
    position_token_type: 'ERC-20', //token type to approve
    interaction_address: interaction_address, // contract to interact with to interact with poolAddress
    args: args, //args to pass to the smart contracts to trigger 'method_name'
  };
}

/// claimRewards
async function claimRewards(
  pool_name,
  chain,
  underlying_tokens,
  pool_address,
  investing_address,
  staking_address,
  boosting_address,
  distributor_address,
  rewards_tokens,
  metadata,
  amountNotBN,
  amountsDesired,
  amountsMinimum,
  ranges,
  rangeToken,
  userAddress,
  receiverAddress,
  lockupTimestamp,
  deadline
) {
  const abi = '';
  const method_name = 'claim';
  const args = [];
  const interaction_address = '';

  return {
    abi: abi, //json file name
    method_name: method_name, //method to interact with the pool
    position_token: null, // token needed to approve
    position_token_type: 'ERC-20', //token type to approve
    interaction_address: interaction_address, // contract to interact with to interact with poolAddress
    args: args, //args to pass to the smart contracts to trigger 'method_name'
  };
}

module.exports = {
  deposit: deposit,
  deposit_and_stake: null,
  unlock: null,
  redeem: redeem,
  stake: stake,
  unstake: unstake,
  boost: null,
  unboost: null,
  claim_rewards: claimRewards,
  claim_interests: null,
};
