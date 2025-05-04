// 箭头函数的参数没有 arguments，有剩余参数...arr
// 1. 利用箭头函数求和
const getSum = (...arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}
const result = getSum(2, 3, 4)
console.log(result)  //9

