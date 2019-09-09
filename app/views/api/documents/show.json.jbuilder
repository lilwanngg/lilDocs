json.extract! @document, :id, :user_id, :title, :content, :updated_at
json.parentCommentIds @document.comments.where(parent_id: nil).pluck(:id)
json.current_user_permission_id @document.permissions.where(user_id: current_user.id).where(doc_id: @document.id).first
json.permission_ids @document.permissions.pluck(:id)