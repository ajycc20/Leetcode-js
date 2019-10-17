/**
 * 
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 输入: "race a car"
 * 输出: false
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let arr = s.match(/[a-zA-Z0-9]/g)
  if (arr == null) {
    return true
  }
  let str = ''
  for (let i of arr) {
    str += i
  }
  str = str.toLowerCase()
  if (str == str.split('').reverse().join('')) {
    return true
  }
  return false
};
