class AddUserToPost < ActiveRecord::Migration[5.2]
  def change
    add_reference :posts, :user, presence: true
  end
end
