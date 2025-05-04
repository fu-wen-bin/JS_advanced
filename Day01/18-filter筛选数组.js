const arr = [10, 20, 30]
// const newArr = arr.filter(function (item, index) {
//   // console.log(item)
//   // console.log(index)
//   return item >= 20
// })
// 返回的符合条件的新数组

const newArr = arr.filter(item => item >= 20)
console.log(newArr)
