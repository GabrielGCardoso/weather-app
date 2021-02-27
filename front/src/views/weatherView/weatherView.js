import Card from '../../components/card/card';
import React from 'react';
import WeatherService from '../../services/weatherService';
import './weatherView.css';

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
            cachedPlaces: [],
        };
        this.listRef = React.createRef();
    }

    setWeatherComponentData(responseData) {
        const { actual: actualPlace, cached: cachedPlaces } = responseData;
        this.setState({ isLoading: false, error: false, actualPlace, cachedPlaces });
    }

    errorHandler(error) {
        console.error(error);
        this.setState({ error: true, isLoading: false });
    }

    updateWeatherByPlace() {
        this.setState({ isLoading: true });
        return new WeatherService().getPlace(this.props.location.state.place).then(this.setWeatherComponentData.bind(this)).catch(this.errorHandler.bind(this));
    }

    componentDidMount = () => {
        this.updateWeatherByPlace();
    };

    renderCachedComponents() {
        return this.state.cachedPlaces.map((place) => (
            <Card key={place.name} width={'20%'} loading={false} place={place.name} iconCode={place.iconCode} temperature={place.temperature} description={place.description} />
        ));
    }
    render = () => {
        if (this.state.error) {
            return <div>Place not found!</div>;
        }
        return (
            <div style={{ height: '100%' }}>
                <div style={{ height: '50%', width: '100%'}}>
                    <Card
                        width={'100%'}
                        loading={this.state.isLoading}
                        place={this.state.actualPlace.name}
                        iconCode={this.state.actualPlace.iconCode}
                        temperature={this.state.actualPlace.temperature}
                        description={this.state.actualPlace.description}
                    />
                </div>
                <div style={{ height: '50%'}}>
                    <div>{this.renderCachedComponents()}</div>
                </div>
            </div>
        );
    };
}
