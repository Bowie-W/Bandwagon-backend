const knex = require("knex")(require("../knexfile"));

exports.getAllUsers = (req,res) => {
    console.log(req.user)
    console.log(req.user.username)
    knex('user')
    .then((usersData) => {
        const userlist = usersData.filter( users => users.username !== req.user.username)
        res.status(200).json(userlist)
    })
    
    // res.status(201).json('receiving');


}

exports.getSingleUser = (req,res) =>{
    console.log(req.params.userid)
    knex('user')
    .where({id : req.params.userid})
    .then ((userData) => {
        res.status(200).json(userData)
    })

}

