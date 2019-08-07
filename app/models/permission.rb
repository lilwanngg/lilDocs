# == Schema Information
#
# Table name: permissions
#
#  id              :bigint           not null, primary key
#  doc_id          :integer          not null
#  user_id         :integer          not null
#  permission_type :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Permission < ApplicationRecord
    validates :permission_type, inclusion: { in: %w(edit view) }

    belongs_to :user
    belongs_to :document,
        primary_key: :id,
        foreign_key: :doc_id,
        class_name: :Document

end
