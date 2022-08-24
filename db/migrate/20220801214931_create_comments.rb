class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      
      t.belongs_to :post, null: false, foreign_key: true, on_delete: :cascade
      t.timestamps
    end
  end
end
