class City < ApplicationRecord
  attr_accessor :yelp
  validates :name, presence: true
  validates :country_id, numericality: true
  validates :user_id, numericality: true
  
  belongs_to :country
  belongs_to :user
  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end
end