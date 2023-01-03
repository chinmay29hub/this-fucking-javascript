const squares = document.querySelectorAll(".csquare")

const times = {
    "red" : 0,
    "yellow" : 0,
    "green" : 0
}

squares.forEach(square => {
    square.onclick = () => {
        // console.log(square.value)
        times[square.value] += 1
        square.textContent = times[square.value]
    }
})

const clear = () => {
    times.red = 0
    times.yellow = 0
    times.green = 0
    squares.forEach(square => { 
        square.textContent = ""
    })
}

const clearGame = document.getElementById("cl")
clearGame.onclick = () => {
    clear()
}

