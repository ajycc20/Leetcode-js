/**
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
 * s = "leetcode"
 * 返回 0.
 * 
 * s = "loveleetcode",
 * 返回 2.
 * 
 * 注意事项：您可以假定该字符串只包含小写字母。
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let obj = {}, str = ''
  str = s.split('').map(val => obj[val] ? obj[val] += 1 : obj[val] = 1)
  for (let i in obj) {
    if (obj[i] == 1) {
      return s.indexOf(i)
    }
  }
  return -1
};
