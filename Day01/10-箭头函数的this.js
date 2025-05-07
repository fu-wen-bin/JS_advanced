// 1. 普通函数
function fun () {
  console.log(this) //window
}

const obj = {
  uname: 'John',
  sayHi: function () {
    console.log(this)
  },
}

obj.sayHi()

// 2. 箭头函数的 this  本层没有 向上一层作用域的 this
const fn = () => {
  console.log(this)  //window
}
fn()

// 3. 对象方法箭头函数
const obj2 = {
  uname: '傅文斌',
  sayHi: () => {
    console.log(this)  // this 指向 window
  },
}
obj2.sayHi()

const obj3 = {
  uname: '傅桂华',
  sayHi: function () {
    console.log(this)
    const count = () => {
      console.log(this)  // obj3 根据作用域链和上下文语义规则逐层寻找this
    }
    count()
  },
}
obj3.sayHi()