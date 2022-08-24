class Post < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true
  validates :user_id, numericality: true
  
  belongs_to :country
  belongs_to :user
  has_many :comments, dependent: :destroy
  has_many :post_likes, dependent: :destroy
end