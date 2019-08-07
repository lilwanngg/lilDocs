class CreatePermissions < ActiveRecord::Migration[5.2]
  def change
    create_table :permissions do |t|
      t.integer :doc_id, null: false
      t.integer :user_id, null: false
      t.string :permission_type, null: false
      t.timestamps
    end
    add_index :permissions, :doc_id
    add_index :permissions, :user_id
    add_index :permissions, [:doc_id, :user_id], unique: true
  end
end
