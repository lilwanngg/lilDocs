@comments.each do |comment|
  json.set! comment.id do
    json.extract! comment, :id, :comment, :start_index, :end_index, :updated_at, :user_id 
    if comment.parent_id == nil
      json.childrenCommentIds comment.children_comments.pluck(:id)
    end
  end
end