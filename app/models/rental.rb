class Rental < ApplicationRecord
    belongs_to :user
    belongs_to :guest

    validates :name, presence: true, uniqueness: true
    validates :location, presence: true
    validates :price, presence: true
    validates :rating, presence: true
    validates :image, presence: true
    validates :description, presence: true
end
