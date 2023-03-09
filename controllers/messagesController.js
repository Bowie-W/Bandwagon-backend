const knex = require("knex")(require("../knexfile"));
const jwt = require("jsonwebtoken");

exports.getMessages = (req,res) => {
    console.log(req.params)
    knex('messages')
    .where({conversation_id:req.params.convo_id})
    .then((foundConvo) => {
        console.log(foundConvo)
        res.status(200).json(foundConvo)
    })
    .catch((error) => {
        res.status(400).json(error)
    })
}

exports.postMessage = (req,res) => {
    // console.log(req.params)
    // console.log(req.body)
    knex('messages')
    .insert(req.body)
    .then((newMsg) => {
        res.status(200).json(req.body)
    })
    .catch((error) => {
        res.status(400).json(error)
    })
}

exports.getNewChat = (req,res) => {
    console.log(req.params)
    knex(`messages`)
    .where({})
}