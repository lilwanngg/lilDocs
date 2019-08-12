json.extract! @document, :id, :user_id, :title, :content, :updated_at
json.current_user_permission_id @document.permissions.where(user_id: current_user.id).where(doc_id: @document.id).first
json.permission_ids @document.permissions do |perm|
    # json.set! perm.id do
        json.extract! perm, :id, :user_id, :doc_id, :permission_type
        json.user perm.user, :id, :first_name, :last_name, :email
    # end
end