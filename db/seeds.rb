# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
    {name: 'admin'},
    {name: 'alicia'},
    {name: 'interviewnewbie'}
])

Question.create([
    {dont_ask: true, ask: false, content: 'Do you have any children?', user_id:1},
    {dont_ask: true, ask: false, content: 'Are you pregnant?', user_id:1},
    {dont_ask: true, ask: false, content: 'Are you planning to have children?', user_id:1},
    {dont_ask: true, ask: false, content: 'Are you married?', user_id:1},
    {dont_ask: true, ask: false, content: 'Where are you from?', user_id:1},
    {dont_ask: true, ask: false, content: 'How old are you?', user_id:1},
    {dont_ask: true, ask: false, content: 'Are you sure you’ll be able to work when you have a newborn?', user_id:1},
    {dont_ask: true, ask: false, content: 'How do you identify?', user_id:1},
    {dont_ask: true, ask: false, content: '(In NYC) What are you currently earning?', user_id:2},
    {ask: true, dont_ask: false, content: 'What is the most rewarding project you’ve ever worked on and why?', user_id:1},
    {ask: true, dont_ask: false, content: 'Why are you looking to move on from your current position?', user_id:1},
    {ask: true, dont_ask: false, content: 'What does your ideal role look like?', user_id:1},
    {ask: true, dont_ask: false, content: 'Tell me about a time when you and a colleague didn’t see eye to eye. How did you deal with it?', user_id:1}
    {ask: true, dont_ask: false, content: 'What do you like to do for fun?', user_id:1},
    {ask: true, dont_ask: false, content: 'How small/large were the teams you worked on previously?', user_id:1},
    {ask: true, dont_ask: false, content: 'Do you prefer working at a smaller or larger company? Why?', user_id:1},
    {ask: true, dont_ask: false, content: 'How do you like to be managed?', user_id:2},
    {ask: true, dont_ask: false, content: '(If manager) What is your management style?', user_id:3}

])