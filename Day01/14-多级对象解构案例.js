// 1. 这是后台传递过来的数据
const msg = {
  'code': 200,
  'msg': '获取新闻列表成功',
  'data': [
    {
      'id': 1,
      'title': '5G商用自己，三大运用商收入下降',
      'count': 58,
    },
    {
      'id': 2,
      'title': '国际媒体头条速览',
      'count': 56,
    },
    {
      'id': 3,
      'title': '乌克兰和俄罗斯持续冲突',
      'count': 1669,
    },

  ],
}

// 需求1： 请将以上 msg 对象  采用对象解构的方式 只选出 data 方面后面使用渲染页面
// 1.1 选出 data 方便后面使用渲染页面
const { data } = msg
console.log(data)

// 需求2： 上面 msg 是后台传递过来的数据，我们需要把 data 选出当做参数传递给 函数
// msg 虽然很多属性，但是我们利用解构只要 data
function render1 ({ data }) {
  // 我们只要 data 数据
  // 内部处理
  console.log(data)

}

render1(msg)

// 需求3， 为了防止 msg 里面的 data 名字混淆，要求渲染函数里面的数据名改为 myData
function render ({ data: myData }) {
  // 要求将 获取过来的 data 数据 更名为 myData
  // 内部处理
  console.log(myData)

}

render(msg)
