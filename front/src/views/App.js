import Input from './input/input';
import Card from '../components/card/card';
import { Switch, Route } from 'react-router-dom';
import './App.css';

export default () => (
    <div className="center">
        <Switch>
            <Route path="/" exact={true} component={Input} />
            <Route path="/card" component={Card} />
        </Switch>
    </div>
);
