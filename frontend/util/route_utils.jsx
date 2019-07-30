import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, withRouter } from 'react-router-dom'

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.id)
})

const Auth = ({ loggedIn, path, component: Component, exact }) => (

    <Route path={path} exact={exact}
        render={props => (
            loggedIn ? (<Redirect to="/about" />) : (<Component {...props} />)
        )} />

)

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth))