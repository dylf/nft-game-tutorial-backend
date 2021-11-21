import * as hre from 'hardhat';

const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ['Marty', 'Ronnie', 'Jane'],
        [
            'QmUF4LHPsdsj5joGBmsCHvZQRaywi1yqBRwion2tPP8eLq',
            'Qmc3PqKNWT3riSpBLWGLTXc1j4whDekmR9rbE4pKvJwTZ1',
            'QmYvYfoDm1actGEyGmdkB65jXQNTM8UKYG9wVJCYQ4YV4x'
        ],
        [100, 150, 280],
        [100, 80, 40],
        'Arceus',
        'QmWuaLJYCjiRhS9Vr7KHSHqLRvHi9Jpjt7ZU16FRHSGRng',
        10000,
        50
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);  
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();