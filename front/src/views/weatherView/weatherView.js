import Card from '../../components/card/card';
import React from 'react';
import WeatherService from '../../services/weatherService';

export default class WeatherView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { place: 'not found' };
        this.listRef = React.createRef();
    }

    updateWeatherByPlace() {
        new WeatherService()
            .getPlace(this.props.location.state.place)
            .then(console.log)
            .catch(console.error);
        //receiving place via location
        this.setState({ ...this.props.location.state });
    }

    componentDidMount = () => {
        this.updateWeatherByPlace();
    };

    render = () => (
        <>
            <Card place={this.state.place} />
        </>
    );
}
