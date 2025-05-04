// ... --剩余参数写法  只存在于函数当中
// ... 获取多余的实参，是个真数组
function getSum (a, b, ...arr) {  //前面指定的参数正常，...获取剩下的参数
  console.log(arr)
}

getSum(2, 3)
getSum(2, 3, 1, 4)