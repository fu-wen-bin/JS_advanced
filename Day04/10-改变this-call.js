const obj = {
  uname: 'pink',
}

function fn (x, y) {
  console.log(this) // window
  console.log(x + y)
}

// 1. 调用函数
// 2. 改变 this 指向
fn.call(obj, 1, 2)  // (this 指向, 参数1, 参数2, ...)
