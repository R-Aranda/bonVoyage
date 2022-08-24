class Destination < ApplicationRecord
  
  belongs_to :city
  belongs_to :trip
  belongs_to :user
end