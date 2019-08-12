import * as PermissionsUtil from "../util/permission_api_util"

export const RECEIVE_PERMISSIONS = "RECEIVE_PERMISSIONS"
export const RECEIVE_PERMISSION = "RECEIVE_PERMISSION"
export const REMOVE_PERMISSION = "REMOVE_PERMISSION"

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