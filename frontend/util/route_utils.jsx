import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.id),
    checkUser: Boolean(state.session.loginuser)
})

const Auth = ({ loggedIn, path, component: Component, exact }) => (

    <Route path={path} exact={exact}
        render={props => (
            loggedIn ? (<Redirect to="/about" />) : (<Component {...props} />)
        )} />

)

const UserCheck = ({ checkUser, path, component: Component, exact }) => (
    <Route path={path} exact={exact}
        render={props => (
            !checkUser ? (<Redirect to="/signin" />) : (<Component {...props} />)
        )} />
)

const Protected = ({ loggedIn, path, component: Component, exact }) => (

    <Route path={path} exact={exact}
        render={props => (
            !loggedIn ? (<Redirect to="/about" />) : (<Component {...props} />)
        )} />

)

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth))
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected))
export const UserRoute = withRouter(connect(mapStateToProps)(UserCheck))
