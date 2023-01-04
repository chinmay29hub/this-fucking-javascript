// https://superheroapi.com/api/access-token/character-id

const TOKEN = 863266971605844
const URL = `https://superheroapi.com/api.php/${TOKEN}`
const heroBtn = document.getElementById("newHeroButton")
const img = document.getElementById("heroImage")
const searchbtn = document.getElementById("searchButton")
const searchIn = document.getElementById("searchInput")

const getSuperHero = (id) => {
  fetch(`${URL}/${id}`).then(
    response => response.json()
  ).then(
    json => {
      const name = `<h2>${json.name}</h2>`
      const power = `<p>🧠 Intelligence : ${json.powerstats.intelligence}</p>
      <p>💪 Strength : ${json.powerstats.strength}</p><p>⚡ Speed : ${json.powerstats.speed}</p><p>😎 Durability : ${json.powerstats.durability}</p><p>🔥 Power : ${json.powerstats.power}</p><p>🔫 Combat : ${json.powerstats.combat}</p>`
      img.innerHTML = `${name}<img src="${json.image.url}" height=200 width=200>${power}`
    }
    
  )
}

const searchSuperHero = (name) => {
  fetch(`${URL}/search/${name}`).then(
    response => response.json()
  ).then(
    json => {
      const name = `<h2>${json.results[0].name}</h2>`
      const power = `<p>🧠 Intelligence : ${json.results[0].powerstats.intelligence}</p>
      <p>💪 Strength : ${json.results[0].powerstats.strength}</p><p>⚡ Speed : ${json.results[0].powerstats.speed}</p><p>😎 Durability : ${json.results[0].powerstats.durability}</p><p>🔥 Power : ${json.results[0].powerstats.power}</p><p>🔫 Combat : ${json.results[0].powerstats.combat}</p>`
      img.innerHTML = `${name}<img src="${json.results[0].image.url}" height=200 width=200>${power}`
  }
    
  )
}

const getRandomId = () => {
  return Math.floor(Math.random() * 731) + 1
}

heroBtn.onclick = () => getSuperHero(getRandomId())
searchbtn.onclick = () => searchSuperHero(searchIn.value)

