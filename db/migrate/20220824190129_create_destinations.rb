class CreateDestinations < ActiveRecord::Migration[5.2]
  def change
    create_table :destinations do |t|
      t.string :name
      t.belongs_to :city, null: false, foreign_key: true
      t.belongs_to :trip, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
    end
  end
end
