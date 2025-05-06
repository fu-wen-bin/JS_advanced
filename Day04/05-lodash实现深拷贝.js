<!-- 先引用 -->
const lodash = require('./lodash.min.js')

const obj = {
  uname: 'pink',
  age: 18,
  hobby: ['乒乓球', '足球'],
  family: {
    baby: '小pink',
  },
}
const o = lodash.cloneDeep(obj)
console.log(o)
o.family.baby = '老pink'
console.log(obj)
console.log(o)

