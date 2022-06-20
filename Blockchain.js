import Block from "./Block.js";

class Blockchain {
  constructor(block) {
    this.block = [];
    this.init(block);
  }

  init(block) {
    this.getBlockchain().push(block);
  }
  getBlockchain() {
    return this.block;
  }
  getLastBlockHash() {
    let blockLength = this.getBlockchain().length;
    return this.getBlockchain()[blockLength - 1].currentHash;
  }
  validateBlockchain() {
    let counter = [];
    for (let i = 1; i < this.block.length; i++) {
      if (this.block[i - 1].currentHash == this.block[i].previousHash) {
        // comparing block in
        counter.push(true);
      }
    }
    console.log(
      "is every hash equivalent to the previous hash? :",
      counter.every((item) => true)
    );
  }
}

const myBlock = new Block();
const MyBlockChain = new Blockchain(myBlock.getBlock());

const block2 = new Block(2, MyBlockChain.getLastBlockHash());
MyBlockChain.init(block2.getBlock());

const block3 = new Block(3, MyBlockChain.getLastBlockHash());
MyBlockChain.init(block3.getBlock());

const block4 = new Block(4, MyBlockChain.getLastBlockHash());
MyBlockChain.init(block4.getBlock());

const block5 = new Block(5, MyBlockChain.getLastBlockHash());
MyBlockChain.init(block5.getBlock());

console.log(MyBlockChain.getBlockchain());

MyBlockChain.validateBlockchain();

export default Blockchain;
