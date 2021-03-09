const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity)!='string' || sampleActivity==undefined ){
    return false;
  }else if(isNaN(+sampleActivity)){
    return false;
  }else if(+sampleActivity<=0 || +sampleActivity>15){
    return false;
  }else{
    sampleActivity=+sampleActivity;
    let k=0.693/HALF_LIFE_PERIOD;
    let t=Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/k);
    return t;
  }
};
