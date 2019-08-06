class CreateDocuments < ActiveRecord::Migration[5.2]
  def change
    create_table :documents do |t|
      t.string :title, null: false, default: "Untitled"
      t.text :content
      t.integer :user_id, null: false
    end
    add_index :documents, :title
    add_index :documents, :user_id
  end
end
