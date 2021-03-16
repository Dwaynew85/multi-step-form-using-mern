import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FirstStep from '../components/FirstStep';
import Header from '../components/Header';

const AppRouter = () => (
    <Router>
        <div className="container">
            <Header />
            <Switch>
                <Route component={FirstStep} path="/" exact={true} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
