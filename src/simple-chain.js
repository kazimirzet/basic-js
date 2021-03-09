const CustomError = require("../extensions/custom-error");

const chainMaker = {
  'chainArr':[],
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    value!==undefined?this.chainArr.push(`( ${value} )`):this.chainArr.push(`(  )`);
    return this;
  },
  removeLink(position) {
    if(position<0 || isNaN(position) || position>this.chainArr.length){
      this.chainArr=[];
      throw new Error('Error')
      
    }else{
      this.chainArr.splice(position-1,1);
      return this;
    }
  },
  reverseChain() {
    this.chainArr=this.chainArr.reverse();
    return this;
  },
  finishChain() {
    let chain=this.chainArr.join('~~');
    this.chainArr=[];
    return chain;
  }
};

module.exports = chainMaker;
