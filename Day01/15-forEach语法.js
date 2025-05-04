// forEach 就是遍历  加强版的for循环  适合于遍历数组对象
// noinspection JSVoidFunctionReturnValueUsed

const arr = ['red', 'green', 'pink']
arr.forEach(function (item, index) {
  // forEach 不返回值，适合遍历数组对象
  console.log(item)  // 数组元素 red  green pink
  console.log(index) // 索引号
})
