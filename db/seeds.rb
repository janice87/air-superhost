# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "janicec", name: "Janice", password: "123456")
user2 = User.create(username: "lucasc", name: "Lucas", password: "123456")

guest1 = Guest.create(name: "Vacant", email: "vacant@email.com")
guest2 = Guest.create(name: "Phil", email: "phil@gmail.com")
guest3 = Guest.create(name: "Jungkook", email: "jjk@bts.com")
guest4 = Guest.create(name: "Tae", email: "tae@bts.com")

rental1 = Rental.create(name: "The Rodney House", location: "Delaware", price: 295, rating: 5, description: "The Rodney House will not disappoint. Walk to everything Lewes has to offer; beautiful beaches, fantastic restaurants and history.", user_id: 1, guest_id: 1, image: "https://media.architecturaldigest.com/photos/5a3029d635ab657ae47973ee/master/w_1280%2Cc_limit/Airbnb_Delaware.jpg")
rental2 = Rental.create(name: "Coconut Paradise", location: "Florida", price: 349, rating: 5, description: "ISLAND POOL HOME! VERY CLEAN, and PRIVATE. Newer Home with a POOL!!! Little Gasparilla Island. This is NOT Boca Grande. A True Island paradise accessible by boat/water taxi only. White sandy paths and golf carts only, No cars. ", user_id: 1, guest_id: 2, image: "https://media.architecturaldigest.com/photos/608213e7b1de021fcf65910e/master/w_1280%2Cc_limit/a9d56b8d-2ac9-4553-8081-07869f01.jpg")
rental3 = Rental.create(name: "Tropical Garden Retreat", location: "Hawaii", price: 198, rating: 5, description: "Soak up the sun and unwind in the abundant outdoor living space which blends seamlessly with the interior of this stunning ground-level retreat. The home is constructed with architectural cedar poles and the living space is expansive an open air, allowing you to enjoy the natural world around you.", user_id: 2, guest_id: 3, image: "https://media.architecturaldigest.com/photos/608304761198d8019ca14217/master/w_1280%2Cc_limit/Hawaii.jpg")
rental4 = Rental.create(name: "Secluded Treehouse", location: "Georgia", price: 389, rating: 4, description: "Calm in the crazy - sanctuary for seclusion.... Suite of three beautifully furnished rooms set among the trees. Just minutes from downtown, this secluded property is an urban retreat like no other. The treehouse provides an intimate, simple and restful retreat for 2 people. ", user_id: 2, guest_id: 4, image: "https://media.architecturaldigest.com/photos/5a30296738bb817b7ffe1b4b/master/w_1280%2Cc_limit/Airbnb_Georgia3.jpg")
