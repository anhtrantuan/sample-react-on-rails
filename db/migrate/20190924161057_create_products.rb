class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :barcode
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end
