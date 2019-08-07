json.extract! user, :id, :first_name, :last_name, :email
json.docIds user.documents.pluck(:id)

