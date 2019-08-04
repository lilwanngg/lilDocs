import React from 'react'
import { connect } from 'react-redux'
import DocNavBar from './document_nav_bar'
import DocIndexItem from './document_index_item'
import NewDocBar from './new_doc_bar'

class DocumentIndex extends React.Component {

    componentDidMount() {
        this.props.fetchDocuments()
    }

    render() {
        const { documents, user } = this.props
        const docLis = documents.map( (doc, idx) => {
           return (<DocIndexItem doc={doc} key={idx}/>)
        })


        return(
            <>
                <DocNavBar user={user} />
                <div className="new-doc-area">
                    <NewDocBar />
                </div>
                {/* <RecentDocBar /> */}
                <ul className="allDocs">
                    {docLis}
                </ul>
            </>
        )
    }
}


export default DocumentIndex