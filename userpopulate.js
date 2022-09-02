require('dotenv').config()
const db = require('./config/database')
const User = require('./models/User')

User.create(
    {
        name: "Daniel",
        lastName: "Lugo",
        mail: "daniellugofreelancer@gmail.com",
        photo: "https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg",
        password: "Hola1234",
        country: "Venezuela"
    },
    {
        name: "Natalia",
        lastName: "Torres",
        mail: "nataliaTorres@hotmail.com",
        photo: "https://static.wikia.nocookie.net/fma/images/2/26/MouthyMei.JPG/revision/latest?cb=20111223205242&path-prefix=es",
        password: "654321Nati",
        country: "Colombia"
    },
    {
        name: "Cinthya",
        lastName: "Di Risio",
        mail: "cindy.fdb@hotmail.com",
        photo: "https://i.pinimg.com/originals/42/04/77/4204771e1c54c2b9afa36f668261e7bd.gif",
        password: "Cinthya789",
        country: "Argentina"
    }

)