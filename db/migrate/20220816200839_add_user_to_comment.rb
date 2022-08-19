class AddUserToComment < ActiveRecord::Migration[5.2]
  def change
    add_reference :comments, :user, presence: true
  end
end
