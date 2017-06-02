const express = require('express')
const cors = require ('cors')

const app = express()

app.use(cors())

const gardeners = [{
  name: "Al",
  img: "https://us.123rf.com/450wm/Elnur/Elnur1411/Elnur141108500/36684721-funny-gardener-with-shears-isolated-on-white.jpg?ver=6",
  bio: "I wear big glasses so I can see your beautiful face better and also get those damn slugs off of my leafy greens."
}, {
  name: "Howie",
  img: "https://s-media-cache-ak0.pinimg.com/736x/c5/7a/45/c57a4505a5fbbcae3a41559edacb5a42.jpg",
  bio: "I enjoy gardening and wearing inappropriate things as clothes."
},{
  name: "Ronald",
  img: "http://i.imgur.com/lIVZ6wY.jpg",
  bio: "Life is GOOD. FLOWERS ARE LIFE. LOVE ME..."
},{
  name: "Michelle",
  img: "http://angryblackladychronicles.com/wp-content/uploads/2013/11/michelle-obama-white-house-kitchen-garden.jpg",
  bio: "I mean, he isn't president anymore!"
},{
  name: "Allie",
  img: "http://larahudson.com/sites/default/files/styles/large/public/field/image/angry%20gardener.jpg?itok=TAMgyuFu",
  bio: "I need a strong gardener to support my strong gardening personality."
},{
  name: "Celeste",
  img: "https://www.thesun.co.uk/wp-content/uploads/2017/03/nintchdbpict000169419745.jpg?strip=all&w=960&quality=100",
  bio: "Come make garden art with me."
}]

app.get('/gardeners', (req, res) => {
  res.json(gardeners)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log("Listening on 3000, yo");
})
