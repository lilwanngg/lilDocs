import SessionForm from './session_form';
import { connect } from 'react-redux';
import { findEmail, receiveErrors } from '../actions/session_actions';

const msp = (state, ownProps) => {
    return {
        errors: state.errors.session,
        formType: "checkemail"
    }
}

const mdp = (dispatch) => {
    return {
        processForm: user => dispatch(findEmail(user)),
        removeErrors: () => dispatch(receiveErrors([]))
    }
}


export default connect(msp, mdp)(SessionForm);