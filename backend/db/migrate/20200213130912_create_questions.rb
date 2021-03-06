class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.boolean :ask
      t.boolean :dont_ask
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
