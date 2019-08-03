import React from 'react'
import { connect } from 'react-redux'
import DocNavBar from './document_nav_bar'

class DocumentIndex extends React.Component {

    componentDidMount() {
        this.props.fetchDocuments()
    }

    render() {
        const { documents, user } = this.props
        const docLis = documents.map( (doc, idx) => {
            let date = new Date(doc.created_at)
            let fDate = date.toDateString().split(' ').slice(1)
            fDate[1] += ","
            let fDateString = fDate.join(' ')
            return( <li key={`doc${idx}`}>{doc.title} {fDateString}</li>)
        })
        return(
            <>
                <DocNavBar user={user} />
                <ul>
                    {docLis}
                </ul>
            </>
        )
    }
}

const msp = state => ({
    user: state.entities.users[state.session.id]
})

export default connect(msp) (DocumentIndex)