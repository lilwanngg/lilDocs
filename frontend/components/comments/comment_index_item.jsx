import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props) 
        this.state = { comment: this.props.comment, clicked: false }
    }

    render() {
        const { comment } = this.props
        return(
            <li>
                <div className="one-comment">
                    {comment.comment}
                </div> 
            </li>
        )
    }
}

export default withRouter(CommentIndexItem)