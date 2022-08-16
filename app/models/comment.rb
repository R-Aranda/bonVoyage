class Comment < ApplicationRecord
  validates :body, presence: true
  validates :user_id, numericality: true

  belongs_to :post
  belongs_to :user
end