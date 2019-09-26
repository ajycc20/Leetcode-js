/**
 * 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。
 * 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。
 * 
 * 输入：[4,2,5,7]
 * 输出：[4,5,2,7]
 * 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
 * 
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let left = [], right = [], res = [] // left 奇数  right 偶数
  let length = A.length
  for (let i = 0; i < length; i++) {
    if (A[i] % 2 === 0) {
      right.push(A[i])
    } else {
      left.push(A[i])
    }
  }
  for (let j = 0; j < length / 2; j++) {
    res.push(right[j])
    res.push(left[j])
  }
  return res
};