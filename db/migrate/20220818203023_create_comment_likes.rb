class CreateCommentLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :comment_likes do |t|
      t.references :comment, foreign_key: true
      t.references :user, foreign_key: true
      t.boolean :liked, null: false, default: false
      
      t.timestamps
    end
  end
end
