@permissions.each do |permission|
  json.set! permission.id do
    json.extract! permission, :id, :user_id, :doc_id, :permission_type
  end
end