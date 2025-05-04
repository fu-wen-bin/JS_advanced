// 局部作用域-块作用域
// 函数体或者大括号内都是块作用域
for (let i = 1; i <= 5; i++) {
  // 块作用域
  console.log(i)
}
console.log(i) //位于 i 的作用域外，无法访问
