
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup, receiveErrors } from '../actions/session_actions';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: "signup"
  }
}

const mdp = (dispatch) => {
  return {
    processForm: user => dispatch(signup(user)),
    removeErrors: () => dispatch(receiveErrors([]))
  }
}

export default connect(msp, mdp)(SessionForm);