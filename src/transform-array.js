const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)){
    throw 'Error'
  }
  let arrCopy=[].concat(arr);
  
  let finalArr=[];
  
  let discardNext='--discard-next';
  let discardPrev='--discard-prev';
  let doubleNext='--double-next';
  let doublePrev='--double-prev';
  
  let actions=['--discard-next','--discard-prev','--double-next','--double-prev'];
  
  
  for(let i=0;i<arrCopy.length;i++){
   
      if(arrCopy[i]==discardNext && i!=arrCopy.length-1 && actions.every(elem => elem !=arrCopy[i+1])){
        arrCopy.splice(i+1,1)
      }else if(arrCopy[i]==discardPrev && i!=0 && actions.every(elem => elem !=arrCopy[i-1])){
        arrCopy.splice(i-1,1)
      }else if(arrCopy[i]==doubleNext && i!=arrCopy.length-1 && actions.every(elem => elem !=arrCopy[i+1])){
        arrCopy.splice(i+1,1,arrCopy[i+1],arrCopy[i+1])
      }else if(arrCopy[i]==doublePrev && i!=0 && actions.every(elem => elem !=arrCopy[i-1])){
        arrCopy.splice(i-1,2,arrCopy[i-1],arrCopy[i-1])
      }
  }
  for(let j=0;j<arrCopy.length;j++){
    if (actions.every(elem => elem !=arrCopy[j])){
      finalArr.push(arrCopy[j])
    }
  }
  return finalArr;
};
