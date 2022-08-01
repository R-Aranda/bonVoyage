# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

countries = Country.create([
  {
    name: "England"
  },
  {
    name: "United States"
  },
  {
    name: "Mexico"
  },
  {
    name: "Thailand"
  }
])

posts = Post.create([
  {
    title: "Post about this country",
    body: "This is a body about that post",
    country: Country.first
  },
  {
    title: "Another post",
    body: "The description about this other post",
    country: Country.first
  }
])


comments = Comment.create([
  {
    title: "First comment about England",
    body: "This is the first comment about England. This is the body of the comment.",
    post: Post.first
  },
  {
    title: "Second Comment",
    body: "This is the second comment body",
    post: Post.first
  }
])