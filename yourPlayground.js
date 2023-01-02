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

const numbers = [1,2,3,4,5,6]
let temp = 0
for (const number of numbers) {
    temp += number
}
console.log(temp)