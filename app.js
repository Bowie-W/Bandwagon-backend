const express = require('express');
const cors = require('cors');
const app = express();
const loginRoutes = require('./routes/loginRoute')
const usersRoutes = require('./routes/usersRoute')
const profileRoutes = require('./routes/profileRoute')
const signupRoutes = require('./routes/signupRoute')
const conversationsRoutes = require('./routes/conversationsRoute')
const messagesRoutes = require ('./routes/messagesRoute')
require('dotenv').config()
const PORT = 5050

app.use(cors())
app.use(express.static('public'))
app.use(express.json())

app.use('/login', loginRoutes)
app.use('/signup', signupRoutes)
app.use('/profile', profileRoutes)
app.use('/users', usersRoutes)
app.use('/conversations', conversationsRoutes)
app.use('/messages', messagesRoutes)

app.listen(PORT, function(){
    console.log(`Running on ${PORT}, baby; baby`)
})