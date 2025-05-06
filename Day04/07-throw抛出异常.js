function fn (x, y) {
  if (!x || !y) {
    // throw '没有参数传递进来'
    throw new Error('没有参数传递过来')
  }

  return x + y
}

console.log(fn())
