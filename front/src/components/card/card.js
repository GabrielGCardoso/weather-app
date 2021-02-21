import './card.css';
import React from 'react';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        /**
         * you can find more about on https://openweathermap.org/weather-conditions
         */
        this.urlIcon = `https://openweathermap.org/img/wn`;
    }

    render = () => {
        if (this.props.loading) return <div>Loading...</div>;

        return (
            <div
                className="card"
                width={this.props.width}
                height={this.props.height}
            >
                <div className="container">
                    <h4>
                        <b>{this.props.place}</b>
                    </h4>
                    <h4>
                        <b>{this.props.temperature}&deg;</b>
                    </h4>
                    <img src={`${this.urlIcon}/${this.props.iconCode}@2x.png`} />
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    };
}
