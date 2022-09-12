class Trip < ApplicationRecord
 has_many :destinations, dependent: :destroy 
  accepts_nested_attributes_for :destinations
belongs_to :user
end