import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Counter from './components/Counter';

export default ( 
    <Router>
        <Switch>
            <Route exact path="/" component={Main}/>
        </Switch>
    </Router>
);