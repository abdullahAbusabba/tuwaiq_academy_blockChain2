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
}

const myBlock = new Block();
const MyBlockChain = new Blockchain(myBlock.getBlock());

const block2 = new Block(1,MyBlockChain.getLastBlockHash());
MyBlockChain.init(block2.getBlock());

const block3 = new Block(2, MyBlockChain.getLastBlockHash());
MyBlockChain.init(block3.getBlock());

console.log(MyBlockChain.getBlockchain());

export default Blockchain;
