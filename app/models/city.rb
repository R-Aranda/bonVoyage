class City < ApplicationRecord
  validates :name, presence: true
  validates :country_id, numericality: true
  
  belongs_to :country
end