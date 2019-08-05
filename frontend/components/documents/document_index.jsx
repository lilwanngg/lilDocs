import React from 'react'
import { connect } from 'react-redux'
import DocNavBar from './document_nav_bar'
import DocIndexItem from './document_index_item'
import NewDocBar from './new_doc_bar'
import { create } from 'domain';

class DocumentIndex extends React.Component {

    componentDidMount() {
        this.props.fetchDocuments()
    }

    render() {
        if (this.props.documents.length > 0) {return null}
        debugger
        const { documents, user } = this.props
        const docLis = documents.map( (doc, idx) => {
           return (<DocIndexItem doc={doc} key={idx} deleteDocument={this.props.deleteDocument} openModal={this.props.openModal}/>)
        })


        return(
            <>
                <DocNavBar user={user} />
                <div className="new-doc-area">
                    <NewDocBar createDocument={this.props.createDocument}/>
                </div>
                {/* <RecentDocBar /> */}
                <div className="recent-wrapper">
                    <div className="index-bottom">
                        <div className="recent-docs-bar">
                            Recent documents
                        </div>
                        <ul className="allDocs">
                            {docLis}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}


export default DocumentIndex