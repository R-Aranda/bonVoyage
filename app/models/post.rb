class Post < ApplicationRecord
  belongs_to :country
  has_many :comments
end