import React from 'react';
import CommentIndexItem from './comment_index_item'
import { Link, withRouter } from 'react-router-dom';

class CommentIndexContainer extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.fetchComments(doc)
    }

    render () {
        const { comments } = this.props
        const commentLis = comments.map( (comment, idx) => {
            return(
                <CommentIndexItem 
                comment={comment} key={idx}
                deleteComment={this.props.deleteComment}
                updateDocument={this.props.updateDocument}
                />
            )
        }) 
        
        return(
            <>
                <div className="comments-index">
                    <ul className="allComments">
                        {commentLis}
                    </ul>
                </div>
            </>
        )
    }
}

const msp = (state) => ({
    comments: Object.values(state.entities.comments),
    user: state.entities.users[state.session.id],
})

const mdp = dispatch => ({
    fetchComments: (doc) => dispatch(fetchComments(doc)),
    createComment: (doc) => dispatch(createComment(doc)),
    fetchComment: (doc, id) => dispatch(fetchComment(doc, id)),
    deleteComment: (doc, id) => dispatch(deleteComment(doc, id)),
    updateComment: (doc, id) => dispatch(updateComment(doc, id)),
})

export default connect(msp, mdp)(CommentIndexContainer)