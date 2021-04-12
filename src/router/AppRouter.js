import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FirstStep from '../components/FirstStep';
import SecondStep from '../components/SecondStep';
import ThirdStep from '../components/ThirdStep';
import Header from '../components/Header';

const AppRouter = () => {
    const [user, setUser] = useState({});

    const updateUser = (data) => {
        setUser((prevUser) => ({ ...prevUser, ...data}));
    };

    const resetUser = () => {
        setUser({});
    };

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
};

export default AppRouter;
