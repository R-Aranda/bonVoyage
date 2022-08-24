class CreateTrips < ActiveRecord::Migration[5.2]
  def change
    create_table :trips do |t|
      t.string :name, null: false

      t.belongs_to :user, null: false, foreign_key: true
    end
  end
end
