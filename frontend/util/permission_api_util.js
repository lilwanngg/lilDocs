export const fetchPermissions = () => {
    return $.ajax({
        method: "GET",
        url: "api/permissions"
    })
}

export const fetchDocPermissions = ( doc ) => {
    return $.ajax({
        method: "GET",
        url: "api/permissions",
        data: { doc } 
    })
}

export const fetchDocPermission = (doc) => {
    return $.ajax({
        method: "GET",
        url: `api/permissions${doc.id}`,
        data: { doc }
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

export const updatePermission = (permission) => {
    return $.ajax({
        method: "PATCH",
        url: `api/permissions/${permission.id}`,
        data: { permission }
    })
}

export const updateDocPermission = (permission) => {
    return $.ajax({
        method: "PATCH",
        url: `api/permissions/${permission.id}`,
        data: { permission }
    })
}

export const deletePermission = (perm) => {
    return $.ajax({
        method: "DELETE",
        url: `api/permissions/${perm.id}`
    })
}

export const deleteDocPermission = (perm) => {
    return $.ajax({
        method: "DELETE",
        url: `api/permissions/${perm.id}`
    })
}