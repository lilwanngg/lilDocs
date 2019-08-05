class ChangeDefaultContentType < ActiveRecord::Migration[5.2]
  def change
    change_column :documents, :content, :text, :default => ""
  end
end
