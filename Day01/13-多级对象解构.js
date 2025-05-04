// 多级对象解构
const pig = {
  name: '佩奇',
  family: {
    mother: '猪妈妈',
    father: '猪爸爸',
    brother: '乔治',
  },
  age: 6,
}

// 多级解构
const { name, family: { mother, father, brother } } = pig
console.log(name)
console.log(mother)
console.log(father)
console.log(brother)

// 多级数组对象解构
const pig2 = [
  {
    name2: '佩奇',
    family2: {
      mother2: '猪妈妈',
      father2: '猪爸爸',
      brother2: '乔治',
    },
    age2: 6,
  }]

// 多级解构
const [{ name2, family2: { mother2, father2, brother2 } }] = pig2
console.log(name2)
console.log(mother2)
console.log(father2)
console.log(brother2)