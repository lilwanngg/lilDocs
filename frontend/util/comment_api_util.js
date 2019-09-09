export const fetchComments = (document) => {
    return $.ajax({
        method: "GET",
        url: `api/documents/${document.id}/comments`
    })
}

export const fetchComment = (document, id) => {
    return $.ajax({
        method: "GET",
        url: `api/documents/${document.id}/${id}`
    })
}

export const createComment = (document) => {
    return $.ajax({
        method: "POST",
        url: `api/documents/${document.id}/comments`
    })
}

export const updateComment = (document, comment) => {
    return $.ajax({
        method: "PATCH",
        url: `api/documents/${document.id}/${comment.id}`,
        data: { comment }
    })
}

export const deleteComment = (document, id) => {
    return $.ajax({
        method: "DELETE",
        url: `api/documents/${document.id}/${id}`
    })
}

