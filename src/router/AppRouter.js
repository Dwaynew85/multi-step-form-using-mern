import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FirstStep from '../components/FirstStep';
import SecondStep from '../components/SecondStep';
import ThirdStep from '../components/ThirdStep';
import Header from '../components/Header';

const AppRouter = () => (
    <Router>
        <div className="container">
            <Header />
            <Switch>
                <Route component={FirstStep} path="/" exact={true} />
                <Route component={SecondStep} path="/second" />
                <Route component={ThirdStep} path="/third" />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
