class RemoveColumnsFromQuestion < ActiveRecord::Migration[6.0]
  def change
    remove_column :questions, :ask, :boolean
    remove_column :questions, :dont_ask, :boolean
  end
end
