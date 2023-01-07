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

fruits = ["🍎", "🍌", "🍊", "🫐"]

// console.log(fruits[Math.floor(Math.random() * fruits.length)])

// setTimeout(() => {
//   console.log("Hello World")
// }, 3000);

class Car {
  constructor (name, color, topSpeed) {
    // properties
    this.name = name
    this.color = color
    this.topSpeed = topSpeed
    this.currentSpeed = 0
  }

  getCurrentSpeed () {
    return this.currentSpeed
  }

  zeroToSizty () {
    
      console.log("WOOO That was fast as fcuk boi")
      this.currentSpeed = 60
      console.log(this.currentSpeed)
    
  }
  // default values
  drive (speed = 10) {
    // console.log("just drove 2 miles")
    this.currentSpeed += speed
    console.log(`Driving at ${this.currentSpeed} mph`)
  }

  brake () {
    // console.log("Brake applied")
    this.currentSpeed -= 10
    console.log(`Speed after braking : ${this.currentSpeed}`)
  }

  stop () {
    this.currentSpeed = 0
    console.log(`Speed after stop method : ${this.currentSpeed}`)
  }

}

const ferrari = new Car("ferrari", "red", 250)
const porsche = new Car("porsche", "yellow", 260)

// console.log(porsche)
// console.log(porsche.getCurrentSpeed())
// porsche.drive()

// porsche.drive()
// porsche.drive()
// porsche.drive()
// const nums = [1,2,3,4,5].forEach(_ => porsche.drive())

// porsche.brake()
// porsche.zeroToSizty()
// porsche.stop()


// console.log(ferrari)
// console.log("Current Speed : " + ferrari.currentSpeed)
// ferrari.drive()
// ferrari.brake()

// console.log("Current Speed : " + ferrari.currentSpeed)
// ferrari.drive()

// console.log("Current Speed : " + ferrari.currentSpeed)
// ferrari.drive()
// console.log("Current Speed : " + ferrari.currentSpeed)
// ferrari.drive()

// ferrari.zeroToSizty()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()

// ferrari.brake()
// ferrari.brake()

// ferrari.stop()
// console.log(ferrari.currentSpeed)

Array.prototype.myPush = function (item) {
  this[this.length] = item
  return this
}


const fruits_2 = ["🍎", "🍌", "🍊", "🫐"]
fruits_2.myPush("🥝")
fruits_2.myPush("🍇")
fruits_2.myPush("🍪")
// console.log(fruits_2)


class Bank {

  constructor (money) {
    this.money = money
  }
  
  balance () {
    return this.money
  }

  withdraw (value = 0) {
    // if (value > this.money) {
    //   console.log("Insufficient Balace dude")
    //   return
    // }
    this.money -= value
    // console.log(`Your new balance after withdrawing : $${this.money}`)
  }

  deposit (value = 0) {
    this.money += value
    // console.log(`Your new balance after deposit : $${this.money}`)
  }
}

chinmay = new Bank(100)
// chinmay.balance()
// chinmay.withdraw(50)
// chinmay.deposit(100)
// chinmay.deposit(500)
// chinmay.balance()
// chinmay.withdraw(50)
// chinmay.withdraw(1000)


const depositBtn = document.getElementById("deposit")
const withdrawBtn = document.getElementById("withdraw")
const uiBalance = document.getElementById("balance")
const insufficient = document.getElementById("insufficient")
const getDepMoney = document.getElementById("money-deposit")
const getWithMoney = document.getElementById("money-withdraw")


const updateBalance = () => {
    uiBalance.innerHTML = `Chinmay Sonawane's Balance : $${chinmay.balance()}`
}
updateBalance()

depositBtn.onclick = () => {
    chinmay.deposit(Number(getDepMoney.value))
    updateBalance()
    getDepMoney.value = ""
}

withdrawBtn.onclick = () => {

    if (Number(getWithMoney.value) > chinmay.balance()) {
        insufficient.innerHTML = `You have insufficent balance`
        return
    }

    chinmay.withdraw(Number(getWithMoney.value))
    updateBalance()
    getWithMoney.value = ""
}