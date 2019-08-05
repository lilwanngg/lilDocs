import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class DocIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
        this.deleteDocument = this.deleteDocument.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDotFocus = this.handleDotFocus.bind(this);
        this.handleDotBlur = this.handleDotBlur.bind(this);
    }

    deleteDocument(e) {
        // debugger
        e.stopPropagation();
        this.props.deleteDocument(this.props.doc.id);
    }

    // componentWillMount() {
    //     document.addEventListener("mousedown", this.handleClick, false)
    // }

    // componentWillUnmount() {
    //     document.removeEventListener("mousedown", this.handleClick, false)
    // }

    handleClick(e) {
        e.stopPropagation();
        this.props.history.push(`/documents/${this.props.doc.id}`);

        // if (this.state.clicked && ((this.dotDropRef.contains(e.target)))) {
        //     return
        // } else if (!this.state.clicked && !this.dotRef.contains(e.target)) {
        //     return
        // }
        // debugger
        // this.handleDotClick(e);
    }

    handleDotFocus(e) {
        debugger
        e.stopPropagation();
        this.setState({ clicked: true });
    }

    handleDotBlur(e) {
        debugger
        e.stopPropagation();
        this.setState({ clicked: false });
    }

    render() {
        const { doc } = this.props
        const { clicked } = this.state
        const date = new Date(doc.created_at)
        const fDate = date.toDateString().split(' ').slice(1)
        fDate[1] += ","
        const fDateString = fDate.join(' ')
        return( 
            <li onClick={this.handleClick}>
                {/* <Link to={`/documents/${doc.id}`}> */}
                    <div className="one-doc" 
                    // ref={documentRef => this.documentRef = documentRef}
                    >
                        <div className="doc-thumbnail">
                            <img src={window.sampleURL}/>
                        </div>
                        <div className="doc-info">
                            <p>{doc.title}</p> 
                            <div className="date-str">{fDateString}
                                <div className="dotDropdown">
                                    <div onFocus={this.handleDotFocus} onBlur={this.handleDotBlur} tabIndex="1" className="dots">&#8942; 
                                        <div className={`dotDropdown-display ${clicked ? "" : "hideMenu"}`}>
                                            <div>Rename</div>
                                            <div onClick={this.deleteDocument}>Remove</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </Link> */}
            </li>
        )
    }
}


export default withRouter(DocIndexItem)