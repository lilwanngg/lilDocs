import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import EditTitle from '../documents/edit_title'
import ShareDocContainer from '../documents/share_doc'

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal.type) {
        case 'editTitle':
            component = <EditTitle documentId={modal.docId}/>;
            break;
        case 'share':
          component = <ShareDocContainer documentId={modal.docId}/>;
          break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            {component}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.modal,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
