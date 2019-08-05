class ChangeDefaultContent < ActiveRecord::Migration[5.2]
  def change
    change_column :documents, :content, :string, :default => ""
  end
end
