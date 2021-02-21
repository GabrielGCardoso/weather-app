const axios = require('axios');
const config = require('../config.json');

module.exports = new (class Service {
    /**
     * you can find more at https://openweathermap.org/current#name
     * url api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
     */
    constructor() {
        this.appId = config.appID;

        this.baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
    }

    /**
     * @param {integer} kelvinDegree
     * @return {integer} Celsius degree
     */
    kelvinToCelsiusDegree = (kelvinDegree) => kelvinDegree - 273.15;

    formatOutPut = (weatherData) => ({
        name: weatherData.name,
        temperature: this.kelvinToCelsiusDegree(weatherData.main.temp),
        description: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
    });

    callWeatherAPIByCityName = (cityName) => {
        let urlSearch = `${this.baseUrl}?q=${cityName}&appid=${this.appId}`;
        console.log('queryUrl', urlSearch);

        return new Promise((resolve, reject) => {
            axios
                .get(urlSearch)
                .then((response) => resolve(response.data))
                .catch(reject);
        });
    };

    async getPlace({ place }) {
        try {
            return await this.callWeatherAPIByCityName(place).then(
                this.formatOutPut
            );
        } catch (e) {
            e = new Error('place not found!');
            e.error_code = 404;
            throw e;
        }
    }
})();
