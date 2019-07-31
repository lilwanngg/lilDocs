import React from 'react';
import NavbarContainer from './navbar/splash_navbar_container'
import { Route, Switch } from 'react-router-dom'
import LoginFormContainer from './login_form_container'
import SignupFormContainer from './signup_form_container'
import SplashboxContainer from './splashbox/splashbox_container'
import { AuthRoute } from '../util/route_utils'

const App = () => (
    <div>
        <Switch>
            <AuthRoute path="/signin" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Route path="/about" component={SplashboxContainer} />
        </Switch>
    </div>
);

export default App;
