import * as CommentsUtil from "../util/comment_api_util"

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS"
export const RECEIVE_COMMENT = "RECEIVE_COMMENT"
export const REMOVE_COMMENT = "REMOVE_COMMENT"

export const receiveAllComments = (comments) => ({
    type: RECEIVE_COMMENTS,
    comments
})

export const receiveOneComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
})

export const removeComment = (id) => ({
    type: REMOVE_COMMENT,
    id
})


export const fetchComments = (doc) => dispatch => {
    return CommentsUtil.fetchComments(doc).then(comments => dispatch(receiveAllComments(comments)))
}

export const fetchComment = (doc, id) => dispatch => {
    return CommentsUtil.fetchComment(doc, id).then(comment => dispatch(receiveOneComment(comment)))
}

export const createComment = (doc, id) => dispatch => {
    return CommentsUtil.createComment(doc, id).then(comment => dispatch(receiveOneComment(comment)))
}

export const updateComment = (doc, id) => dispatch => {
    return CommentsUtil.updateComment(doc, id).then(comment => dispatch(receiveOneComment(comment)))
}

export const deleteComment = (doc, id) => dispatch => {
    return CommentsUtil.deleteComment(doc, id).then(comment => dispatch(removeComment(id)))
}