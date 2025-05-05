// 1. 构造函数  公共的属性和方法 封装到 Star 构造函数里了
// 可能存在浪费内存问题
function Star (uname, age) {
  this.uname = uname
  this.age = age
  // this.sing = function () {
  //   console.log('唱歌')
  // }
}

Star.prototype.sing = function () {
  console.log('唱歌')
}

const ldh = new Star('刘德华', 55)
const zxy = new Star('张学友', 55)

console.log(ldh === zxy)

// 代码完全一样，不应该浪费内存
console.log(ldh.sing === zxy.sing)  //不使用原型对象，每一个实例对象都有不同的 function

// 2. 原型  --构造函数.prototype
// 2.1 可以将不变的方法，直接定义在 prototype 对象上，这样所有对象的实例都共享同一个方法，不浪费内存
// 2.2 构造函数和原型对象中的 this 都指向实例化的对象
console.log(Star.prototype)

// 3. 构造函数和原型对象的 this 指向
let that

function Star2 (uname) {
  //that = this
  this.uname = uname
}

Star2.prototype.sing = function () {
  that = this
  console.log('唱歌')
}

const ldh2 = new Star2('刘德华')
ldh2.sing()
console.log(ldh2 === that)  //构造函数中的 this 就是 实例对象 ldh2
console.log(ldh2 === that)  //原型对象中的函数 this 还是 实例对象 ldh2
console.log(ldh2.__proto__.constructor === Star2)  // 对象原型的构造函数
