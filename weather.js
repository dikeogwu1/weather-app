const myCity = document.querySelector('.city')
const rate = document.querySelector('.rate')
const icon = document.querySelector('.icon')
const cond = document.querySelector('.cond')
const humidity = document.querySelector('.humidity')
const windSpeed = document.querySelector('.wind')
const input = document.querySelector('.input')
const form = document.querySelector('.form')




let city = []
let weather = {
    "apikey": "5a1a6528671ef4ad0090a16a8a58ffc5",
     fetchweather: function () {
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}
         &units=metric&appid=${weather.apikey}`
         ).then((Response) => Response.json()
         ).then((data) => this.displayWeather(data))
     },

     displayWeather: function (data) {
         const name = data
         const main = name.main
         const weath = name.weather
         const wind = name.wind
        rate.textContent = main.temp
        humidity.innerHTML = main.humidity
        cond.innerHTML = weath[0].description
        windSpeed.innerHTML = wind.speed
        myCity.textContent = city
     },
    
}


form.addEventListener('submit', function (e) {
    e.preventDefault()
    weather.fetchweather()
    if (city.length == 0) {
        city.push(input.value)
    }
    else{
        city.length = 0
        city.push(input.value)
    }
  input.value = ''
})

// function setInput(cit) {
//    cit = input.value
// }
