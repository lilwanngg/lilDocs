import React from 'react'
import DocNavBar from "./document_nav_bar.jsx"
import { connect } from 'react-redux'
import { fetchDocument, updateDocument } from '../../actions/document_actions'
import QuillToolbar from '../richtext/quill_toolbar-clean'


class DocShow extends React.Component {
    
    constructor(props) {
        let _isMounted = false;
        super(props)
        this.state = {title: "", content: "", updated_at: ""}
        this.debouncedUpdate = this.debounce(this.props.updateDocument, 3000)
    }

    componentDidMount() {
        this._isMounted=true;

        this.props.fetchDocument(this.props.match.params.documentId).then( () => {
            if (this._isMounted) {
                this.setState(this.props.doc)
            }
        })
    }

    componentWillUnmount() {
        this._isMounted= false;
    }

    debounce(func, time) {
        let timeout
        return function() {
            const call = () => func.apply(this, arguments)
            clearTimeout(timeout)
            timeout = setTimeout(call, time)
        }
    }


    update(field) {
        const { id } = this.props.doc
        const { title, content } = this.state
        return (e) => {
            this.debouncedUpdate({ id, title, content })
            this.setState({ [field]: e.target.value })
        }
    }

    render () {
        if (!this.props.doc) {return null}
        const { doc, user } = this.props
        return(
            <>
                <DocNavBar doc={doc} user={user} updateDocument={this.props.updateDocument} updatedAt={doc.updated_at}/>
                <QuillToolbar doc={doc} updateDocument={this.props.updateDocument}/>
            </>
        )
    }

}

const msp = (state, ownProps) => {
    return {
        user: state.entities.users[state.session.id],
        doc: state.entities.documents[ownProps.match.params.documentId] 
    };
};


const mdp = dispatch => {
    return {
        fetchDocument: (id) => dispatch(fetchDocument(id)),
        updateDocument: doc => dispatch(updateDocument(doc))
    }
}

export default connect(msp, mdp)(DocShow)