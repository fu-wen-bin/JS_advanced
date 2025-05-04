function getSum () {
  // arguments 动态参数 只存在于函数中
  // arguments 是伪数组
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  console.log(sum)
}

getSum(1, 2, 3, 4)
getSum(1, 2, 3, 4, 5, 6)