class AddUserToCity < ActiveRecord::Migration[5.2]
  def change
    add_reference :cities, :user, presence: true
  end
end
