export const fetchDocuments = () => {
    return $.ajax({
        method: "GET",
        url: "api/documents"
    })
}

export const fetchDocument = (id) => {
    return $.ajax({
        method: "GET",
        url: `api/documents/${id}`
    })
}

export const createDocument = (doc) => {
    return $.ajax({
        method: "POST",
        url: "api/documents",
        data: { doc }
    })
}

export const updateDocument = (doc) => {
    return $.ajax({
        method: "PATCH",
        url: `api/documents/${doc.id}`,
        data: { doc }
    })
}

export const deleteDocument = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `api/documents/${id}`
    })
}

