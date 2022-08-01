class Country < ApplicationRecord
  has_many :posts
  
  before_create :slugify

  def slugify
    self.slug = name.parameterize
  end
end