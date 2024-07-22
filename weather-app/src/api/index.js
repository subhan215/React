const baseURL = "https://api.weatherapi.com/v1/current.json?key=5c102fe9d5ff454cb30163316241907"
export const getWeatherDataFromCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json()
}
export const getWeatherDataFromLocation = async (lat , lon) => {
    console.log("lat: "+ lat , "long" + lon)
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`)
    return await response.json()
}