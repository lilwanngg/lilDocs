# == Schema Information
#
# Table name: documents
#
#  id         :bigint           not null, primary key
#  title      :string           default("Untitled document"), not null
#  content    :text             default("")
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Document < ApplicationRecord 
    validates :title, :user_id, presence: true

    belongs_to :user

    has_many :permissions,
        primary_key: :id,
        foreign_key: :doc_id,
        class_name: :Permission


end
