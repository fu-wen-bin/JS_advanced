const obj = {
  age: 18,
}

function fn (x, y) {
  console.log(this) // {age: 18}
  console.log(x + y)
}

// 1. 调用函数
// 2. 改变this指向
//  fn.apply(this指向谁, 数组参数)  --第二个参数必须是数组！！！
fn.apply(obj, [1, 2])
// 3. 返回值   本身就是在调用函数，所以返回值就是函数的返回值

// 使用场景： 求数组最大值
// const max = Math.max(1, 2, 3)
// console.log(max)
const arr = [100, 44, 77]
const max = Math.max.apply(Math, arr)
const min = Math.min.apply(null, arr)
console.log(max, min)
// 使用场景： 求数组最大值
console.log(Math.max(...arr))
