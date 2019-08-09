json.extract! @permission, :id, :user_id, :doc_id, :permission_type
json.user @permission.user, :id, :first_name, :last_name, :email