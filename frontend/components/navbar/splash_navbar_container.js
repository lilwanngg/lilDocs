
import { connect } from 'react-redux';
import Navbar from './splash_navbar';
import { logout } from '../../actions/session_actions'


const msp = (state) => {
    return {
        user: state.entities.users[state.session.id]
    };
};

const mdp = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect(msp, mdp) (Navbar)