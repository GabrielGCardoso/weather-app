import Card from '../../components/card/card';
import React from 'react';
import WeatherService from '../../services/weatherService';

export default class WeatherView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoading: true,
            actualPlace: {
                name: '',
                iconCode: '',
                temperature: '',
                description: '',
            },
        };
        this.listRef = React.createRef();
    }

    setWeatherComponentData(componentData) {
        const { name, icon, temperature, description } = componentData;
        const actualPlace = { name, iconCode: icon, temperature, description };
        this.setState({ isLoading: false, error: false, actualPlace });
    }

    errorHandler(error) {
        console.error(error);
        this.setState({ error: true, isLoading: false });
    }

    updateWeatherByPlace() {
        this.setState({ isLoading: true });
        return new WeatherService()
            .getPlace(this.props.location.state.place)
            .then(this.setWeatherComponentData.bind(this))
            .catch(this.errorHandler.bind(this));
    }

    componentDidMount = () => {
        this.updateWeatherByPlace();
    };

    render = () => {
        if (this.state.error) {
            return <div>Place not found!</div>;
        }
        return (
            <Card
                width={'30px'}
                height={'40px'}
                loading={this.state.isLoading}
                place={this.state.actualPlace.name}
                iconCode={this.state.actualPlace.iconCode}
                temperature={this.state.actualPlace.temperature}
                description={this.state.actualPlace.description}
            />
        );
    };
}
