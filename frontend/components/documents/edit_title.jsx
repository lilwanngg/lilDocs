import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

class EditTitle extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.doc

    }

    componentDidMount() {
        this.props.fetchDocument(this.props.doc.id)
    }

    update(field) {
        return (e) => {
            this.setState({ doc: { [field]: e.target.value } })
        }
    }

    render() {
        return(
            <form className="edit-title-form">
                <label className="edit-label">Rename</label>
                <label className="sub-edit-label">Please enter a new name for the item:</label>
                <input type="text" value={this.state.title} onChange={this.update('title')}/>
                <input type="submit" onClick={this.props.updateDocument}/>
    
            </form>
        )
    }
}

// const mapStateToProps = ({ errors }) => {
//     return {
//         errors: errors.session,
//         formType: 'edit',
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         processForm: (user) => dispatch(signup(user)),
//         otherForm: (
//             <button onClick={() => dispatch(openModal('login'))}>
//                 OK
//       </button>
//         ),
//         closeModal: () => dispatch(closeModal())
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

export default EditTitle
