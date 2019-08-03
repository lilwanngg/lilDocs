import React from 'react'
import DocNavBar from "./document_nav_bar.jsx"
import { connect } from 'react-redux'
import { fetchDocument } from '../../actions/document_actions'


class DocShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {title: "", content: ""}
    }

    componentDidMount() {
        this.props.fetchDocument(this.props.match.params.documentId).then( () => {
            this.setState(this.props.doc)
        })
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    render () {
        if (!this.props.doc) {return null}
        const { doc, user } = this.props
        return(
            <>
                <DocNavBar doc={doc} user={user}/>
                <div className="docBackground">
                    <textarea className="docSpace" value={this.state.content} name="" cols="106" rows="43" onChange={this.update('content')}></textarea>
                </div>
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
        fetchDocument: (id) => dispatch(fetchDocument(id))
    }
}

export default connect(msp, mdp)(DocShow)