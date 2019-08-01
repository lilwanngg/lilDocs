import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login, receiveErrors } from '../actions/session_actions';

const msp = (state, ownProps) => {
    return {
        loginUser: state.session.loginuser,
        errors: state.errors.session,
        formType: "signin"
    }
}

const mdp = (dispatch) => {
    const demoUser = { first_name: "Guest", last_name: "User", email: "guestuser@demo.com", password: "guestuser" }
    return {
        processForm: user => dispatch(login(user)),
        removeErrors: () => dispatch(receiveErrors([])),
        loginDemoUser: () => dispatch(login(demoUser)),
    }
}


export default connect(msp, mdp)(SessionForm);