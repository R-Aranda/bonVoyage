class Trip < ApplicationRecord
 has_many :destinations, dependent: :destroy 
 
  belongs_to :user
end