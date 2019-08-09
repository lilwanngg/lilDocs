# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

User.create!({first_name: "Guest", last_name: "User", email: "guestuser@demo.com", password: "guestuser"})
User.create!({first_name: "Lillian", last_name: "Wang", email: "lillian@lildocs.com", password: "lillian"})
User.create!({first_name: "Spencer", last_name: "Tassone", email: "spencer@lildocs.com", password: "spencer"})
User.create!({first_name: "George", last_name: "Pensiero", email: "george@lildocs.com", password: "george"})
User.create!({first_name: "Bryan", last_name: "Santos", email: "bryan@lildocs.com", password: "coolbryan"})
User.create!({first_name: "Robbie", last_name: "Ku", email: "robbie@lildocs.com", password: "robbie"})
User.create!({first_name: "Alex", last_name: "Liao", email: "alex@lildocs.com", password: "alexliao"})
User.create!({first_name: "Daniel", last_name: "Keinan", email: "daniel@lildocs.com", password: "daniel"})
User.create!({first_name: "Russel", last_name: "Tsang", email: "russel@lildocs.com", password: "russel"})



