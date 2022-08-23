class AddColumnToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :name, :string
    add_column :products, :desc, :text
  end
end
