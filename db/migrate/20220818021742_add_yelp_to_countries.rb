class AddYelpToCountries < ActiveRecord::Migration[5.2]
  def change
    add_column :countries, :yelp, :text, array: true, default: []
  end
end
