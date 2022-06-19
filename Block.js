import hash from "hash.js";

class Block {
  message;
  nonce;
  block;
  difficulty;
  constructor(difficulty = 1, previousHash = null) {
    this.difficulty = difficulty;
    this.message = this.calculateHash();
    this.nonce = this.message.nonce
    this.message = this.message.message

    this.block = {
      date: Date.now(),
      currentHash: this.message,
      previousHash,
      nonce: this.nonce,
    };
  }

  calculateHash() {
    let message;
    let nonce;
    let start = Date.now();
    for (let i = 0; Date.now() - start < 600_000; i++) {
      nonce = Date.now().toString();
      message = hash.sha256().update(nonce).digest("hex");
      
      if (
        message.substring(0, this.difficulty) == "0".repeat(this.difficulty)
      ) {
        
        this.message = message;
        this.nonce = nonce;
        return {
          message,
          nonce,
        };
      }
    }
  }
  getBlock() {
    return this.block;
  }
}



export default Block;
