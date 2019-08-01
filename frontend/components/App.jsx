import React from 'react';
import NavbarContainer from './navbar/splash_navbar_container'
import { Route, Switch } from 'react-router-dom'
import CheckEmailContainer from './check_email_container'
import SignupFormContainer from './signup_form_container'
import SplashboxContainer from './splashbox/splashbox_container'
import LoginFormContainer from './login_form_container'
import { AuthRoute, UserRoute } from '../util/route_utils'

const App = () => (
    <div>
        <UserRoute path="/verify" component={LoginFormContainer} />
        <AuthRoute path="/signin" component={CheckEmailContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route path="/about" component={SplashboxContainer} />
    </div>
);

export default App;
