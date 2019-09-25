/**
 * 统计所有小于非负整数 n 的质数的数量。
 * 
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 * 
 */

/**
 * @description
 * @param {number} num
 * @returns {boolean}
 */
function isPrime(num) {

  if (num == 2) {
    return true
  } else if (num % 2 == 0) {
    return false
  }
  
  let sqrtNum = Math.sqrt(num)
  for (let i = 3; i <= sqrtNum; i += 2) {
    if (num % i == 0) {
      return false
    }
  }
  return true
}

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let count = 0
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      count += 1
    }
  }
  return count
};
