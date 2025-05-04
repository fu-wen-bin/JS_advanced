// 箭头函数写法更简洁，且不绑定this
// 适用于本来需要匿名函数的地方
const fn = function () {
  console.log(123)
}
fn()

// 箭头函数
const fn2 = () => {
  console.log(123)
}
fn2()

const fn3 = (x) => {
  console.log(x)
}
fn3(666)

// 函数只有一个参数，可以省略小括号
const fn4 = x => {
  console.log(x)
}
fn4(9)

// 函数只有一行代码，可以省略大括号  --包括 return
const fn5 = x => console.log(x)
fn5(9)
const fn6 = x => x + x
console.log(fn6(9))

// 可以直接返回一个对象  --返回对象必须加一个小括号
const fn7 = (uname) => ({ uname: uname })
console.log(fn7('刘德华'))
