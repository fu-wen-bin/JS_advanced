const o = { uname: 'fwb', age: 18 }
// 1. 获得所有的属性名
console.log(Object.keys(o))  // 返回的是数组形式 [ 'uname', 'age' ]

// 2. 获得所有的属性值
console.log(Object.values(o))  //  [ 'fwb', 18 ]

// 3. 对象拷贝
const oo = {}
Object.assign(oo, o)
Object.assign(o, { gender: '男' })  // 也可以用于追加属性
console.log(oo)
console.log(o)