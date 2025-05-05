//1. split 把字符串 转换为 数组  和 join() 相反
const str1 = 'pink,red'
const arr = str1.split(',')
console.log(arr)
const str2 = '2022-4-8'
const arr1 = str1.split('-')
console.log(arr1)

// 2. 字符串的截取   substring(开始的索引号[， 结束的索引号])
// 2.1 如果省略 结束的索引号，默认取到最后
// 2.2 结束的索引号不包含想要截取的部分
const str3 = '今天又要做核酸了'
console.log(str3.substring(5, 7))

// 3. startsWith 判断是不是以某个字符开头
const str4 = 'pink老师上课中'
console.log(str4.startsWith('pink'))

// 4. includes 判断某个字符是不是包含在一个字符串里面
const str5 = '我是pink老师'
console.log(str5.includes('pink')) // true
