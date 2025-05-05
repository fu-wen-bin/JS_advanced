function Star () {

}

Star.prototype.sing = function () {
  console.log('唱歌')
}

const ldh = new Star()
ldh.sing()
// 对象原型__proto__ 指向 该构造函数的原型对象  --是JS非标准属性  存在实例对象里
console.log(ldh.__proto__)
console.log(ldh.__proto__ === Star.prototype)
// 对象原型里面有constructor 指向 构造函数 Star
console.log(ldh.__proto__.constructor === Star)
