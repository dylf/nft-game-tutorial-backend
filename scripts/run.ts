import * as hre from 'hardhat';

const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ['Marty', 'Ronnie', 'Jane'],
        [
            'https://cdn2.bulbagarden.net/upload/thumb/7/7f/395Empoleon.png/250px-395Empoleon.png',
            'https://cdn2.bulbagarden.net/upload/thumb/6/62/093Haunter.png/250px-093Haunter.png',
            'https://cdn2.bulbagarden.net/upload/thumb/b/be/200Misdreavus.png/250px-200Misdreavus.png'
        ],
        [100, 150, 280],
        [100, 80, 40],
        'Arceus',
        'https://cdn2.bulbagarden.net/upload/thumb/f/fc/493Arceus.png/250px-493Arceus.png',
        10000,
        50
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;

    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log('Token Uri:', returnedTokenUri);
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