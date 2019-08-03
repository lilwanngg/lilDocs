@documents.each do |document|
  json.set! document.id do
    json.extract! document, :title, :content, :created_at
  end
end
