class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :likes
      t.integer :dislikes
      t.integer :commentable_id
      t.string :commentable_type
      
      # t.belongs_to :post, optional: true, foreign_key: true
      t.timestamps
    end
    add_index :comments, [:commentable_type, :commentable_id]
  end
end
