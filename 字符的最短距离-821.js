/**
 * 
 * 给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。
 * 
 * 输入: S = "loveleetcode", C = 'e'
 * 输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 * 
 */

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  let res = []
  let left = S.indexOf(C), right = S.indexOf(C, left + 1)
  
  for (let i = 0; i < S.length; i++) {
    res[i] = Math.abs(left - i)
    if (right != -1) {
      res[i] = Math.min(res[i], right - i)
      if (i == right) {
        res[i] = 0
        left = right
        right = S.indexOf(C, right + 1)
      }
    }
  }
  return res
};