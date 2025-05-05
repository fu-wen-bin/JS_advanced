// 实例成员和静态成员
// 1. 实例成员：实例对象上的属性和方法属于实例成员
// 1.1 实例对象和实例成员相互独立，不会互相影响
function Pig (name) {
  this.name = name
}

const peiqi = new Pig('佩奇')
const qiaozhi = new Pig('乔治')
console.log(peiqi)
console.log(qiaozhi)

console.log(peiqi === qiaozhi)

// 2. 静态成员：构造函数的属性和方法成为静态成员
// 2.1 只能通过构造函数访问
// 2.2 静态方法中的 this 指向构造函数

function Pig2 (name) {
  this.name = name
}

Pig2.eyes = 2  // 静态属性
console.log(Pig2.eyes)

Pig2.sayHi = function () {
  console.log(this)   // 静态方法 this 指向构造函数
}

Pig2.sayHi()