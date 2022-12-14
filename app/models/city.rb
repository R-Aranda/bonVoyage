class City < ApplicationRecord
  attr_accessor :yelp, :weather
  validates :name, presence: true
  validates :country_id, numericality: true
  validates :user_id, numericality: true
  
  belongs_to :country
  belongs_to :user
  has_many :destinations
  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end
end