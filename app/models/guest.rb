class Guest < ApplicationRecord
    has_many :rentals, dependent: :destroy
    has_many :users, through: :rentals

    validates :name, presence: true, uniqueness: true
    validates :email, presence: true 
end
