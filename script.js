const key = "0d42803e75b9a57b4006118755cbb26c"

function dataOnScreen(dados){
    document.querySelector(".cidade").innerHTML = dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".min-temp").innerHTML = `Min: ${Math.floor(dados.main.temp_min)}°C`
    document.querySelector(".max-temp").innerHTML = `Max: ${Math.floor(dados.main.temp_max)}°C`
    document.querySelector(".preview-img").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".preview-text").innerHTML = dados.weather[0].description
    document.querySelector(".humidity").innerHTML = `Umidade: ${dados.main.humidity}%`

    console.log(dados)

    

    if (dados.main.temp >= 25){

    }

}

async function searchCity(city){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    dataOnScreen(dados)
    
}

function search(){
    const inputCity = document.querySelector("input").value

    searchCity(inputCity)
}