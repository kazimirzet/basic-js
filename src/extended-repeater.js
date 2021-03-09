const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  let newStr = str;
  if (options.separator === undefined) {
    options.separator = "+";
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  for (let i = 1; i <= options.repeatTimes; i++) {
    if (i != 1) {
      newStr += str;
    }
    if (options.addition !== undefined) {
      for (let j = 1; j <= options.additionRepeatTimes; j++) {
        if (options.additionRepeatTimes != j) {
          newStr += options.addition + options.additionSeparator;
        } else {
          newStr += options.addition;
        }
      }
    }
    if (i != options.repeatTimes) {
      newStr += options.separator;
    }
  }
  return newStr;
};
