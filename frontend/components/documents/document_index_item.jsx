import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class DocIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { doc: this.props.doc, clicked: false };
        this.deleteDocument = this.deleteDocument.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDotFocus = this.handleDotFocus.bind(this);
        this.handleDotBlur = this.handleDotBlur.bind(this);
    }

    deleteDocument(e) {
        this.props.deleteDocument(this.props.doc.id);
    }

    updateDocument(e) {
        this.props.updateDocument(this.state.doc)
    }

    handleClick(e) {
        if (e.target.className !== "dots" && e.target.className !== "remove" && e.target.className !== "rename") {
            this.props.history.push(`/documents/${this.props.doc.id}`);
        }
    }

    handleDotFocus(e) {
        this.setState({ clicked: true });
    }

    handleDotBlur(e) {
        this.setState({ clicked: false });
    }

    render() {
        const { doc } = this.props;
        const date = new Date(doc.updated_at);
        const fDate = date.toDateString().split(' ').slice(1);
        fDate[1] += ",";
        const fDateString = fDate.join(' ');
        const shareicon = (doc.permission_ids.length !== 1 ) ? 
            (<img className="doc-icon-small doc-share-small" src={window.smallShareIconURL} />) : (<></>)
        return (
            <li onClick={this.handleClick}>
                <div className="one-doc">
                    <img className="doc-thumbnail" src={window.sampleURL} />
                    <div className="doc-info">
                        <p>{doc.title}</p>
                        <div className="date-str">
                            <div className="bottom-info-row">
                                <img className="doc-icon-small" src={window.smallDocIconURL} />
                                {shareicon}
                                {fDateString}
                            </div>
                            <div className="dotDropdown">
                                <div onFocus={this.handleDotFocus} onBlur={this.handleDotBlur} tabIndex="1" className="dots">
                                    ●●●
                                    <div className={`dotDropdown-display ${this.state.clicked ? "" : "hideMenu"}`}>
                                        <div className="rename" onClick={() => this.props.openModal({type: "editTitle", docId: doc.id})}>Rename</div>
                                        <div className="remove" onClick={this.deleteDocument}>Remove</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}


export default withRouter(DocIndexItem)
