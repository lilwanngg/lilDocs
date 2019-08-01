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
    return {
        processForm: user => dispatch(login(user)),
        removeErrors: () => dispatch(receiveErrors([]))
    }
}


export default connect(msp, mdp)(SessionForm);