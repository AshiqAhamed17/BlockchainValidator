import SHA256 from "crypto-js/sha256";

export function calculateHash(index, prevHash, timestamp, data) {
  return SHA256(index + prevHash + timestamp + JSON.stringify(data)).toString();
}

export function createGenesisBlock() {
  return {
    index: 0,
    prevHash: "0",
    timestamp: 1618520800000, // Unix timestamp for January 1, 2021
    data: "Genesis Block",
    hash: calculateHash(0, "0", 1618520800000, "Genesis Block"),
  };
}

export function createNewBlock(blockchain, data) {
  const previousBlock = blockchain[blockchain.length - 1];
  const index = previousBlock.index + 1;
  const timestamp = Date.now();
  const prevHash = previousBlock.hash;
  const hash = calculateHash(index, prevHash, timestamp, data);

  return {
    index,
    prevHash,
    timestamp,
    data,
    hash,
  };
}

export function validateBlockchain(blockchain) {
  for (let i = 1; i < blockchain.length; i++) {
    const currentBlock = blockchain[i];
    const previousBlock = blockchain[i - 1];

    if (
      currentBlock.hash !==
      calculateHash(
        currentBlock.index,
        previousBlock.hash,
        currentBlock.timestamp,
        currentBlock.data
      )
    ) {
      return false;
    }
  }
  return true;
}
