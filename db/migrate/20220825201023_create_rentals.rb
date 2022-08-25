class CreateRentals < ActiveRecord::Migration[6.1]
  def change
    create_table :rentals do |t|
      t.string :name
      t.string :location
      t.integer :price
      t.integer :rating
      t.text :description
      t.string :image
      t.integer :user_id
      t.integer :guest_id

      t.timestamps
    end
  end
end
