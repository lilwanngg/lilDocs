class ChangeDefaultValue < ActiveRecord::Migration[5.2]
  def change
    change_column :documents, :title, :string, :default => "Untitled document"
  end
end
