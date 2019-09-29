/**
 * 
 * 1.整数（一轮的得分）：直接表示您在本轮中获得的积分数。
 * 2. "+"（一轮的得分）：表示本轮获得的得分是前两轮有效 回合得分的总和。
 * 3. "D"（一轮的得分）：表示本轮获得的得分是前一轮有效 回合得分的两倍。
 * 4. "C"（一个操作，这不是一个回合的分数）：表示您获得的最后一个有效 回合的分数是无效的，应该被移除。
 * 
 * 输入: ["5","2","C","D","+"]
 * 输出: 30
 * 解释: 
 * 第1轮：你可以得到5分。总和是：5。
 * 第2轮：你可以得到2分。总和是：7。
 * 操作1：第2轮的数据无效。总和是：5。
 * 第3轮：你可以得到10分（第2轮的数据已被删除）。总数是：15。
 * 第4轮：你可以得到5 + 10 = 15分。总数是：30。
 * 
 * 输入: ["5","-2","4","C","D","9","+","+"]
 * 输出: 27
 * 解释: 
 * 第1轮：你可以得到5分。总和是：5。
 * 第2轮：你可以得到-2分。总数是：3。
 * 第3轮：你可以得到4分。总和是：7。
 * 操作1：第3轮的数据无效。总数是：3。
 * 第4轮：你可以得到-4分（第三轮的数据已被删除）。总和是：-1。
 * 第5轮：你可以得到9分。总数是：8。
 * 第6轮：你可以得到-4 + 9 = 5分。总数是13。
 * 第7轮：你可以得到9 + 5 = 14分。总数是27。
 * 
 */

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  let res = []
  ops.forEach(item => {
    switch (item) {
      case 'C':
        if (res.length > 0) {
          res.pop()
        }
        break
      case 'D':
        if (res.length > 0) {
          let num = res.pop()
          res.push(num, num * 2)
        }
        break
      case '+':
        if (res.length == 1) {
          let num = res.pop()
          res.push(num, num)
        } else if (res.length > 1) {
          let num1 = res.pop()
          let num2 = res.pop()
          res.push(num2, num1, num1 + num2)
        }
        break
      default:
        res.push(Number(item))
    }
  })
  return res.reduce((acc, cur) => acc + cur)
};
