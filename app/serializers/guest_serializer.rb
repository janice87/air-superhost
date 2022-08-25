class GuestSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :rentals
end
