const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date==undefined){
    return 'Unable to determine the time of year!';
  }else if(Object.prototype.toString.call(date)!='[object Date]'){
    throw 'Error'
  }
  let mounth=date.getMonth();
  if(mounth<=1 || mounth==11){
    return 'winter';
  }else if(mounth>=2 && mounth<=4){
    return 'spring';
  }else if(mounth>=5 && mounth<=7){
    return 'summer';
  }else if(mounth>=8 && mounth<=10){
    return 'fall'
  }
};
