json.extract! @document, :id, :user_id, :title, :content, :updated_at
json.permissionIds @document.permissions.pluck(:id)