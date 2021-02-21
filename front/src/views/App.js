import Input from './input/input';
import WeatherBoardView from './weatherView/weatherView';
import { Switch, Route } from 'react-router-dom';
import './App.css';

export default () => (
    <div className="center">
        <Switch>
            <Route path="/" exact={true} component={Input} />
            <Route path="/main" component={WeatherBoardView} />
        </Switch>
    </div>
);
