export const fetchPermissions = () => {
    return $.ajax({
        method: "GET",
        url: "api/permissions"
    })
}

export const fetchPermission = (id) => {
    return $.ajax({
        method: "GET",
        url: `api/permissions/${id}`
    })
}

export const createPermission = (permission) => {
    return $.ajax({
        method: "POST",
        url: "/api/permissions",
        data: { permission }
    })
}


export const deletePermission = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `api/permissions/${id}`
    })
}