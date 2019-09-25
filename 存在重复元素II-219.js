/**
 * 
 * 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。
 * 
 * 输入: nums = [1,2,3,1], k = 3
 * 输出: true
 * 
 * 输入: nums = [1,0,1,1], k = 1
 * 输出: true
 * 
 * 输入: nums = [1,2,3,1,2,3], k = 2
 * 输出: false
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], i)
    } else {
      let temp = map.get(nums[i])
      if (Math.abs(temp - i) <= k) {
        return true
      }
      map.set(nums[i], i)
    }
  }
  return false
};
