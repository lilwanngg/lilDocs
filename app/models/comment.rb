# == Schema Information
#
# Table name: comments
#
#  id          :bigint           not null, primary key
#  comment     :text             not null
#  start_index :integer          not null
#  end_index   :integer          not null
#  user_id     :integer          not null
#  doc_id      :integer          not null
#  parent_id   :integer
#  resolved    :boolean          default(FALSE), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Comment < ApplicationRecord
    validates :comment, :start_index, :end_index, presence: true

    belongs_to :user

    belongs_to :document,
        foreign_key: :doc_id,
        class_name: :Document

    has_many :children_comments,
        foreign_key: :parent_id,
        class_name: :Comment

end
