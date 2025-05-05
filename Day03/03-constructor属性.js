// constructor  单词 构造函数

// Star.prototype.sing = function () {
//   console.log('唱歌')
// }
// Star.prototype.dance = function () {
//   console.log('跳舞')
// }
function Star () {
}

// console.log(Star.prototype)

// constructor 属性  指向原型对象的构造函数
Star.prototype = {
  // 重新指回创造这个原型对象的 构造函数   --可以用于区分原型对象到底属于哪个构造函数
  constructor: Star,
  sing: function () {
    console.log('唱歌')
  },
  dance: function () {
    console.log('跳舞')
  },
}
console.log(Star.prototype)  //原型对象

console.log(Star.prototype.constructor)  //指向原型对象的构造函数

console.log(Star.prototype.constructor === Star)  // 两个等价



