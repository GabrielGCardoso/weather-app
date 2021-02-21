import Card from '../../components/card/card';
import React from 'react';

export default class WeatherView extends React.Component {
    constructor(props) {
        super(props);
        this.state = { place: 'not found' };
        this.listRef = React.createRef();
    }

    componentDidMount = () => {
        //receiving place via location
        this.setState({ ...this.props.location.state });
    };

    render = () => (
        <>
            <Card place={this.state.place} />
        </>
    );
}
