//  weather/<city_name></city_name>
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const axios = require('axios');
const config = require('./config.json');

module.exports = new (class Service {
    constructor() {
        this.appId = config.appID;
        this.baseUrl = 'http://api.openweathermap.org/data/2.5/weather';
    }

    async getPlace({ place }) {
        let urlSearch = `${this.baseUrl}?q=${place}&appid=${this.appId}`;
        console.log(urlSearch);
        return new Promise((resolve, reject) => {
            axios
                .get(urlSearch)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }
})();
