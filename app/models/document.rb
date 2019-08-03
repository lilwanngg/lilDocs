# == Schema Information
#
# Table name: documents
#
#  id         :bigint           not null, primary key
#  title      :string           default("Untitled"), not null
#  content    :text
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Document < ApplicationRecord 
    validates :title, :user_id, presence: true

    belongs_to :user


end
