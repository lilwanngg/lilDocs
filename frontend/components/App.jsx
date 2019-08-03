import React from 'react';
import NavbarContainer from './navbar/splash_navbar_container'
import { Route, Switch } from 'react-router-dom'
import CheckEmailContainer from './auth/check_email_container'
import SignupFormContainer from './auth/signup_form_container'
import SplashboxContainer from './splashbox/splashbox_container'
import LoginFormContainer from './auth/login_form_container'
import DocumentIndexContainer from './documents/document_index_container'
import DocShow from './documents/document_show'
import { AuthRoute, UserRoute, ProtectedRoute } from '../util/route_utils'


const App = () => (
    <div>
        <UserRoute path="/verify" component={LoginFormContainer} />
        <AuthRoute path="/signin" component={CheckEmailContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route path="/about" component={SplashboxContainer} />
    <Switch>
        <ProtectedRoute path="/documents/:documentId" component={DocShow} />
        <ProtectedRoute path="/documents" component={DocumentIndexContainer} />
    </Switch>

    </div>
);

export default App;
