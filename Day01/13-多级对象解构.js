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
  },
  {
    name3: '乔治',
    family3: {
      mother3: '猪妈妈',
      father3: '猪爸爸',
      sister: '佩奇',
    },
    age3: 3,
  },
]

// 多级解构
const [
  { name2, family2: { mother2, father2, brother2 }, age2 },
  { name3, family3: { mother3, father3, sister }, age3 },
] = pig2
console.log(name2)
console.log(mother2)
console.log(father2)
console.log(brother2)
console.log(age2)
console.log('----------------')
console.log(name3)
console.log(mother3)
console.log(father3)
console.log(sister)
console.log(age3)