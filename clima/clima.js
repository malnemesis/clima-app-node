const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=cdd5e89f5c64606f2f01d7cc7d34c090`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}