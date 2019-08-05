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

export const createDocument = () => {
    return $.ajax({
        method: "POST",
        url: "api/documents"
    })
}

export const updateDocument = (document) => {
    return $.ajax({
        method: "PATCH",
        url: `api/documents/${document.id}`,
        data: { document }
    })
}

export const deleteDocument = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `api/documents/${id}`
    })
}

