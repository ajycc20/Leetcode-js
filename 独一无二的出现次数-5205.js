/**
 * 
 * 给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。
 * 如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
 * 
 * 输入：arr = [1,2,2,1,1,3]
 * 输出：true
 * 
 * 输入：arr = [1,2]
 * 输出：false
 * 
 * 输入：arr = [-3,0,1,-3,1,1,1,-3,10,0]
 * 输出：true
 * 
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let obj = {}
  arr.map(val => obj[val] ? obj[val] += 1 : obj[val] = 1)
  let res = []
  for (let i in obj) {
    res.push(obj[i])
  }
  let set = new Set(res)
  if (set.size == res.length) {
    return true
  }
  return false
};
