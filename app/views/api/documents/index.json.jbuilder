@documents.each do |document|
  json.set! document.id do
    json.extract! document, :id, :title, :content, :user_id, :created_at
    json.current_user_permission_id document.permissions.where(user_id: current_user.id).where(doc_id: document.id).pluck(:id)
    json.permission_ids document.permissions.where(doc_id: document.id).pluck(:id)
  end
end