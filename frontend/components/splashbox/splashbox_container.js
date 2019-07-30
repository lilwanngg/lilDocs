import { connect } from 'react-redux';
import Splashbox from './splashbox';


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

export default connect(msp, mdp)(Splashbox)