class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :comment, null: false
      t.integer :start_index, null: false
      t.integer :end_index, null: false
      t.integer :user_id, null: false
      t.integer :doc_id, null: false
      t.integer :parent_id
      t.boolean :resolved, null: false, default: "false"
      t.timestamps
    end
    add_index :comments, :user_id
    add_index :comments, :doc_id
    add_index :comments, :parent_id
  end
end
