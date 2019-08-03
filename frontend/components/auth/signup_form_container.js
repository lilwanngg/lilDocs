
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup, receiveErrors, login } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: "signup"
  }
}

const mdp = (dispatch) => {
  const demoUser = { first_name: "Guest", last_name: "User", email: "guestuser@demo.com", password: "guestuser" }
  return {
    processForm: user => dispatch(signup(user)),
    removeErrors: () => dispatch(receiveErrors([])),
    loginDemoUser: () => dispatch(login(demoUser))
  }
}

export default connect(msp, mdp)(SessionForm);