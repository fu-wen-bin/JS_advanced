let i = 1

function fn () {
  console.log(`这是第${i}次`)
  if (i >= 6) {
    return
  }
  i++
  fn() // 函数内部调用自己  递归调用 --必须要有退出条件
}

fn()