class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :created_at, :email, :role
  
end