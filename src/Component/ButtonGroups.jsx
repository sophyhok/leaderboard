import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Rank from './Rank';
import Age from './Age';
import Name from './Name';
import Points from './Points';

const ButtonGroup = ({ handleClick }) => {
    return (
        <Router>
            <Switch>
                <Route path="/rank">
                    <Rank handleClick={handleClick} />
                </Route>
                <Route path="/name">
                    <Name handleClick={handleClick} />
                </Route>
                <Route path="/Name">
                    <Points handleClick={handleClick} />
                </Route>
                <Route path="/rank">
                    <Age handleClick={handleClick} />
                </Route>
            </Switch>
        </Router>
    )
}

export default ButtonGroup;