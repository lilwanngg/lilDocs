class AddTimstampstoDocuments < ActiveRecord::Migration[5.2]
  def change
    add_column :documents, :created_at, :datetime, null: false
    add_column :documents, :updated_at, :datetime, null: false
  end
end
