const express = require('express');
const cors = require('cors');
const app = express();
const loginRoutes = require('./routes/loginRoute')
const usersRoutes = require('./routes/usersRoute')
const profileRoutes = require('./routes/profileRoute')
const signupRoutes = require('./routes/signupRoute')
require('dotenv').config()
const PORT = 8080

app.use(cors())
app.use(express.static('public'))
app.use(express.json())

app.use('/login', loginRoutes)
app.use('/signup', signupRoutes)
app.use('/profile', profileRoutes)
app.use('/users', usersRoutes)

app.listen(PORT, function(){
    console.log(`Running on ${PORT}, baby; baby`)
})