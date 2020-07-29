# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
    { name: 'admin' },
    { name: 'alicia' },
    { name: 'interviewnewbie' }
])

Question.create([
    { content: 'What is the most rewarding project you’ve ever worked on and why?', user_id:1 },
    { content: 'Why are you looking to move on from your current position?', user_id:1 },
    { content: 'What does your ideal role look like?', user_id:1 },
    { content: 'Tell me about a time when you and a colleague didn’t see eye to eye. How did you deal with it?', user_id:1 },
    { content: 'How small/large were the teams you worked on previously?', user_id:1 },
    { content: 'Do you prefer working at a smaller or larger company? Why?', user_id:1 },
    { content: 'How do you like to be managed?', user_id:2 },
    { content: 'Out of all the companies you have worked for, which has been your favorite and why?', user_id:2 },
    { content: '(If manager) What is your management style?', user_id:3 },
    { content: '(If candidate is a manager) How do you foster inclusivity on your teams?', user_id:3 }
])