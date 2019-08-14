import * as PermissionsUtil from "../util/permission_api_util"

export const RECEIVE_PERMISSIONS = "RECEIVE_PERMISSIONS"
export const RECEIVE_PERMISSION = "RECEIVE_PERMISSION"
export const REMOVE_PERMISSION = "REMOVE_PERMISSION"
export const RECEIVE_DOC_PERMISSIONS = "RECEIVE_DOC_PERMISSIONS"
export const RECEIVE_DOC_PERMISSION = "RECEIVE_DOC_PERMISSION"
export const REMOVE_DOC_PERMISSION = "REMOVE_DOC_PERMISSION"

export const receiveAllPermissions = (permissions) => ({
    type: RECEIVE_PERMISSIONS,
    permissions
})

export const receiveOnePermission = (permission) => ({
    type: RECEIVE_PERMISSION,
    permission
})

export const removePermission = (perm) => ({
    type: REMOVE_PERMISSION,
    perm
})

export const receiveDocPermissions = (permissions) => ({
    type: RECEIVE_DOC_PERMISSIONS,
    permissions
})

export const receiveDocPermission = (permission) => ({
    type: RECEIVE_DOC_PERMISSION,
    permission
})

export const removeDocPermission = (perm) => ({
    type: REMOVE_DOC_PERMISSION,
    perm
})

export const fetchPermissions = () => dispatch => {
    return PermissionsUtil.fetchPermissions().then(permissions => dispatch(receiveAllPermissions(permissions)))
}

export const fetchPermission = (id) => dispatch => {
    return PermissionsUtil.fetchPermission(id).then(permission => dispatch(receiveOnePermission(permission)))
}

export const createPermission = (permission) => dispatch => {
    return PermissionsUtil.createPermission(permission).then(permission => dispatch(receiveOnePermission(permission)))
}

export const updatePermission = (permission) => dispatch => {
    return PermissionsUtil.updatePermission(permission).then(permission => dispatch(receiveOnePermission(permission)))
}

export const deletePermission = (perm) => dispatch => {
    return PermissionsUtil.deletePermission(perm).then(permission => dispatch(removePermission(perm)))
}

export const fetchDocPermissions = (doc) => dispatch => {
    return PermissionsUtil.fetchDocPermissions(doc).then(permissions => dispatch(receiveDocPermissions(permissions)))
}

export const fetchDocPermission = (doc) => dispatch => {
    return PermissionsUtil.fetchDocPermission(doc).then(permission => dispatch(receiveDocPermission(permission)))
}

export const updateDocPermission = (permission) => dispatch => {
    return PermissionsUtil.updateDocPermission(permission).then(permission => dispatch(receiveDocPermission(permission)))
}

export const deleteDocPermission = (perm) => dispatch => {
    return PermissionsUtil.deleteDocPermission(perm).then(permission => dispatch(removeDocPermission(perm)))
}