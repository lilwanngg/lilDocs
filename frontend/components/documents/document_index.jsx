import React from 'react'

class DocumentIndex extends React.Component {

    componentDidMount() {
        this.props.fetchDocuments()
    }

    render() {
        const { documents } = this.props
        const docLis = documents.map( (doc, idx) => {
            let date = new Date(doc.created_at)
            let fDate = date.toDateString().split(' ').slice(1)
            fDate[1] += ","
            let fDateString = fDate.join(' ')
            return( <li key={`doc${idx}`}>{doc.title} {fDateString}</li>)
        })
        return(
            <ul>
                {docLis}
            </ul>
        )
    }
}

export default DocumentIndex