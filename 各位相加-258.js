/**
 * 
 * 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。
 * 
 * 输入: 38
 * 输出: 2 
 * 解释: 各位相加的过程为：3 + 8 = 11, 1 + 1 = 2。 由于 2 是一位数，所以返回 2。
 * 
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let res = addStr(num)
  return res
};

function addStr(num) {
  let str = '' + num
  let res = 0
  if (str.length == 1) {
    return +str
  } else {
    for (let i = 0; i < str.length; i++) {
      res += +str[i]
    }
    return addStr(res)
  }  
}
