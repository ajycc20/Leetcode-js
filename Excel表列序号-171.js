/**
 * 
 * 输入: "A" 输出: 1
 * 
 * 输入: "AB" 输出: 28
 * 
 * 输入: "ZY" 输出: 701
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let res = 0
  for (let i = s.length - 1; i >= 0; i--) {
    let num = s[i].charCodeAt() - 64
    res += Math.pow(26, s.length - i - 1) * num
  }
  return res
};