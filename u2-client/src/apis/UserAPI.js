import axios from "axios"

const url = "https://localhost:7245/WeatherForecast"

export const testFunction = async() =>{
    try {
        return (await axios.get(url).then(response => response.data))
    }
    catch(err){
        console.log(err)
    }
}