const arr = [
  {
    name: '张三',
    salary: 10000,
  }, {
    name: '李四',
    salary: 10000,
  }, {
    name: '王五',
    salary: 20000,
  },
]
// 涨薪的钱数  10000 * 0.3
// const money = arr.reduce(function (prev, item) {
//   return prev + item.salary * 0.3
// }, 0)
const money = arr.reduce((prev, item) =>
  prev + item.salary * 0.3, 0)
console.log(money)
