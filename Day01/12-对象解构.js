// 1. 对象解构
const obj = {
  uname: '傅文斌',
  age: 18,
}
// 常规用法 obj.name

// 解构的语法
// 属性名和变量名必须一样  也不能有外部变量同名
//const { uname, age } = { uname: '傅文斌', age: 18 }
// 等价于const uname = obj.uname
//console.log(uname)
//console.log(age)

// 对象解构的变量名可以重新改名  --旧变量名：新变量名
const uname = '傅桂华'
const { uname: username, age } = { uname: '傅文斌', age: 18 }
console.log(uname)
console.log(username)
console.log(age)

// 2. 解构数组对象
const pig = [
  {
    uname1: '佩奇',
    age1: 6,
  },
  {
    uname2: '乔治',
    age2: 3,
  },
]
const [
  { uname1, age1 },
  { uname2, age2 }] = pig  // 数组[ 对象{} ]
console.log(uname1)
console.log(age1)
console.log(uname2)
console.log(age2)