@documents.each do |document|
  json.set! document.id do
    json.extract! document, :id, :title, :content, :created_at
  end
end