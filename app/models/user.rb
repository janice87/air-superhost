class User < ApplicationRecord
    has_many :rentals, dependent: :destroy
    has_many :guests, through: :rentals

    validates :username, presence: true, uniqueness: true
    validates :name, presence: true
    validates :password, presence: true

    has_secure_password
end
