class CreateSurveys < ActiveRecord::Migration
  def change
    create_table surveys do |t|
      t.string :title
      t.string :author
      t.timestamps
    end
  end
end
