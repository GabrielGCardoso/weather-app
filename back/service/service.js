const axios = require('axios');
const config = require('../config.json');

module.exports = new (class Service {
    /**
     * you can find more at https://openweathermap.org/current#name
     * url api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
     */
    constructor() {
        this.appId = config.appID;
        this.cacheService = require('./cacheService');
        this.baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
    }

    /**
     * @param {integer} kelvinDegree
     * @return {float} Celsius degree
     */
    kelvinToCelsiusDegree = (kelvinDegree) =>
        parseFloat(kelvinDegree - 273.15).toFixed(2);

    formatOutPut = (weatherData) => ({
        name: weatherData.name,
        temperature: this.kelvinToCelsiusDegree(weatherData.main.temp),
        description: weatherData.weather[0].description,
        iconCode: weatherData.weather[0].icon,
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
            const actual = await this.callWeatherAPIByCityName(place).then(
                this.formatOutPut
            );
            const cached = this.cacheService.getLatest(5);
            this.cacheService.setCache(place, actual);
            return { actual, cached };
        } catch (error) {
            console.log(error);
            let e = new Error('place not found!');
            e.error_code = 404;
            throw e;
        }
    }
})();
