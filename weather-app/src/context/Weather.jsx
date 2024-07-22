import { createContext, useContext, useState } from "react";
import { getWeatherDataFromCity, getWeatherDataFromLocation } from "../api";

const WeatherContext = createContext(null)

export const useWeather = () => {
    return useContext(WeatherContext)
}

export const WeatherProvider = (props) => {
    const [data  , setData] = useState(null)
    const [searchCity , setSearchCity] = useState(null)

    const fetchData = async () => {
            const response = await getWeatherDataFromCity(searchCity)
            console.log(response)
            setData(response) 
    }
    const fetchCurrentUserLocationData = () => {
        navigator.geolocation.getCurrentPosition((position)=> {
            getWeatherDataFromLocation(position.coords.latitude , position.coords.longitude).then((data)=> {
                setData(data)
                console.log(data)
                setSearchCity(data.location.name)
            })
        } ) }
    return (
        <WeatherContext.Provider value={{searchCity , data , setSearchCity , fetchData , fetchCurrentUserLocationData}} >
            {props.children}
        </WeatherContext.Provider>
    )
}
