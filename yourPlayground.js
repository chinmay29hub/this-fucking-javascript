// Array slice

// const fruitss = ["🍎", "🍌", "🍊", "🫐"]

// console.log(fruitss.slice(0,2))

const introducer = (name, shirt) => {
    const person = {
      name: name,
      shirt: shirt,
      assets: 100000,
      liabilities: 50000,
      netWorth: function() {
        return this.assets - this.liabilities
      }
    }
  
    const intro = `Hi, my name is ${person.name} and the color of my shirt is ${person.shirt} and my net worth is $${person.netWorth()} USD`
  
    return intro
  }

// console.log(introducer("Chinmay Sonawne", "Black"))

// const fruits = ["🍎", "🍌", "🍊", "🫐"]

// for (const fruit of fruits) {
//     console.log(fruit)
// }

// const numbers = [1,2,3,4,5,6]
// let temp = 0
// for (const number of numbers) {
//     temp += number
// }
// console.log(temp)

// const max = (numbers) => {
//   const count = {}
//   for (const number of numbers) {
//     if (number in count) {
//       count[number]++
//     } else {
//       count[number] = 1
//     }
//   }

//   return count
// }

// console.log(max([1,2,3,4,4,4,5,5,6,6,7,8,9]))

const wordcount = (sentence) => {
  const count = {}
  for (const number of sentence.split(" ")) {
    if (number in count) {
      count[number]++
    } else {
      count[number] = 1
    }
  }

  return count
}

// console.log(wordcount("Hello World Hello Hello Hello World There"))

function sum(numbers) {
  return numbers.reduce((prev, nex) => {
    return prev + nex
  })
}

// console.log(sum([1,2,3,4]))