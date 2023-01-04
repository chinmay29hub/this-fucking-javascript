// https://dog.ceo/api/breeds/image/random
// .then - Promises
// asynchronous programming

const image = document.getElementById("dogImage")

const fetchImage = () => {
  fetch("https://dog.ceo/api/breeds/image/random").then(
  response => response.json()
).then(
  json => image.innerHTML = `<img src="${json.message}" style="height: 30%; width: 40%;">`
)
}

const btn = document.getElementById("dogButton")
btn.onclick = () => {
  fetchImage()
}

