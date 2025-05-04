// 垃圾回收：
// 引用计数法  --多一个引用 +1，少一个引用 -1，引用数 0 时被回收
// 标记清除法  --从JS根开始，无法到达的对象，系统自动进行垃圾回收

// 内存泄漏：程序中分配的内存因为某种原因程序未释放或者无法释放

// 闭包：内层函数加上外层变量称之为闭包
// 封闭数据 提供操作  --实现数据私有，同时允许外部访问函数内部的变量
// 同时会产生内存泄露的风险

// 简单写法
function outer () {
  let a = 10

  function inner () {
    console.log(a)
  }

  inner()
}

outer()

// 常见闭包形式
function outer2 () {
  let a = 10

  function inner2 () {
    console.log(a)
  }

  return inner2
}

// 外部使用 a 变量
// outer2()  ===  inner2  ===  function inner2() {}
const fun = outer2()
fun()  //调用函数

// 闭包的应用 --统计函数被调用次数
let i = 0

function fn () {
  i++
  console.log(`函数被调用${i}次`)  //全局的 i 很容易被篡改，用闭包进行数据私有化
}

fn()

// 改为闭包的形式
function count () {
  let i = 0

  function fn3 () {
    i++
    console.log(`函数被调用${i}次`)
  }

  return fn3
}

const func = count()
