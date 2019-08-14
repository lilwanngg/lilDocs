@permissions.each do |permission|
  json.set! permission.id do
    json.extract! permission, :id, :doc_id, :permission_type
    json.user permission.user, :id, :first_name, :last_name, :email
  end
end