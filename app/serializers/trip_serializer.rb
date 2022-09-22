class TripSerializer < ActiveModel::Serializer

  attributes :id, :trip_name, :user
  
  belongs_to :user
  has_many :destinations
end