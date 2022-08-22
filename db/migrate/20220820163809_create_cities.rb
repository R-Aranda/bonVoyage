class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.string :name, null: false
      t.string :slug
      t.float :lon
      t.float :lat
      t.integer :geo_id
      t.belongs_to :country, null: false, foreign_key: true
      t.timestamps
    end
  end
end
