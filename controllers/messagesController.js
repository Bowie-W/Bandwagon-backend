const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");

exports.getMessages = (req,res) => {
    console.log(req.params)
    knex('messages')
    .where({conversation_id:req.params.convo_id})
    .then((foundConvo) => {
        res.status(200).json(foundConvo)
    })
    .catch((error) => {
        res.status(400).json(error)
    })


}