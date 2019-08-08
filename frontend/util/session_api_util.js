export const signup = (user) => {
    return $.ajax({
        method: "POST",
        url: 'api/users',
        data: { user }
    })
}

export const login = (user) => {
    return $.ajax({
        method: "POST",
        url: 'api/session',
        data: { user }
    })
}

export const logout = () => {
    return $.ajax({
        method: "DELETE",
        url: 'api/session'
    })
}

export const findEmail = (email) => {
    debugger
    return $.ajax({
        method: "GET",
        url: "api/verify_user",
        data: { email }
    })
}

export const checkPermission = (permission) => {
    return $.ajax({
        method: "GET",
        url: "api/email_to_permission",
        data: { email: permission.email, doc_id: permission.docId, type: permission.type }
    })
}