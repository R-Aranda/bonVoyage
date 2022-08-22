class Country < ApplicationRecord
  attr_accessor :yelp, :photo
  
  validates :name, presence: true
  
  has_many :posts
  has_many :cities
  
  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end
end