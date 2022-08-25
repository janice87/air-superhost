class RentalSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :price, :rating, :description, :image, :user_id, :guest_id
  belongs_to :guest
  belongs_to :user
end
