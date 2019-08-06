import React from 'react'
import { withRouter } from 'react-router-dom'

class NewDocBar extends React.Component {
    constructor(props) {
        super(props)
        this.createDoc = this.createDoc.bind(this)
    }

    createDoc() {
        this.props.createDocument().then( res => this.props.history.push(`/documents/${res.document.id}`))
    }

    render() {
        return (
            <div className="temp-wrapper">

                <ul className="temps">
                    <div className="start">
                        Start a new document
                    </div>
                    <div className="docs">
                        <div className="eachdoc">
                            <div className="docpic" onClick={this.createDoc}>
                                <img src={window.blankURL} />
                            </div>
                            <div className="docdesc">
                                <p>Blank</p>
                            </div>
                        </div>
                        <div className="eachdoc">
                            <div className="docpic">
                                <img src={window.t1URL} />
                            </div>
                            <div className="docdesc">
                                <p>Project proposal</p>
                                <p>Tropic</p>
                            </div>
                        </div>
                        <div className="eachdoc">
                            <div className="docpic">
                                <img src={window.t2URL} />
                            </div>
                            <div className="docdesc">
                                <p>Resume</p>
                                <p>Serif</p>
                            </div>
                        </div>
                        <div className="eachdoc">
                            <div className="docpic">
                                <img src={window.t3URL} />
                            </div>
                            <div className="docdesc">
                                <p>Resume</p>
                                <p>Coral</p>
                            </div>
                        </div>
                        <div className="eachdoc">
                            <div className="docpic">
                                <img src={window.t4URL} />
                            </div>
                            <div className="docdesc">
                                <p>Letter</p>
                                <p>Spearmint</p>
                            </div>
                        </div>
                        <div className="eachdoc">
                            <div className="docpic">
                                <img src={window.t5URL} />
                            </div>
                            <div className="docdesc">
                                <p>Brochure</p>
                                <p>Geometric</p>
                            </div>
                        </div>
                        <div className="eachdoc">
                            <div className="docpic">
                                <img src={window.t6URL} />
                            </div>
                            <div className="docdesc">
                                <p>Report</p>
                                <p>Luxe</p>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        )
    }
}

export default withRouter(NewDocBar)