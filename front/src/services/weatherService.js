const React = require('react');
const axios = require('axios');

export default class WeatherService extends React.Component {
    constructor(props) {
        super(props);
        this.defaultURL = 'http://localhost:3000';
    }

    getPlace(place) {
        return new Promise((resolve, reject) => {
            axios
                .get(`${this.defaultURL}/weather?place=${place}`)
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    reject(error);
                });
        });
    }
}
