// 数组解构  是将数组的单元值快速批量赋值给一系列变量的简洁语法
const arr = [100, 60, 80]
// 数组解构 赋值
const [max, min, avg] = arr
// 类似写法
// const max=arr[0]
// const min=arr[1]
// const avg=arr[2]

// 交换变量
let a = 1
let b = 2;  //必须加分号  --告诉程序到此结束
[b, a] = [a, b]
console.log(a, b)

// 变量多 单元值少
const [a1, b1, c1, d1] = [1, 2, 3]
console.log(a1, b1, c1, d1)  // 1  2  3  undefined

// 变量少 单元值多
const [a2, b2, ...c2] = [1, 2, 3, 4, 5]
console.log(a2, b2, c2)  // 1  2  [3, 4, 5]  --剩下的为一个真数组

// 防止undefined传递  可以设置默认值
const [a3 = '手机', b3 = '华为'] = ['小米']
console.log(a3, b3)  // 小米  华为

// 按需导入赋值
const [a4, b4, , d4] = [1, 2, 3, 4]
console.log(a4, b4, d4)  //  1  2  4

// 多维数组解构
// 1. 正常写法
const [a5, b5, c5] = [1, 2, [3, 4]]
console.log(a5, b5, c5)  // 1  2  [3, 4]

// 2. 多维解构

const [a6, b6, [c6, d6]] = [1, 2, [3, 4]]
console.log(a6, b6, c6, d6)  //解构  1  2  3  4
