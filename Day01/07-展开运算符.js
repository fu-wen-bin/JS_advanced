const arr1 = [1, 2, 3]
// 展开运算符  可以展开数组
// 不会修改原数组
console.log(...arr1)

//求最值
// ...arr === 1,2,3
console.log(Math.max(1, 2, 3))  //3
console.log(Math.max(...arr1))  //3
console.log(Math.min(...arr1))  //1

//合并数组
const arr2 = [4, 5, 6]
const arr = [...arr1, ...arr2]  //拼接字符串
console.log(arr)

