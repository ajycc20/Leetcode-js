/** 
 * 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。
 * 给定 N，计算 F(N)。
 * 
 * 输入：2 输出：1
 * 输入：3 输出：2
 * 输入：4 输出：3
 * 
 */

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  let arr = [0, 1]
  for (let i = 2; i <= N; i++) {
    arr.push(arr[i - 1] + arr[i - 2])
  }
  return arr[N]
};