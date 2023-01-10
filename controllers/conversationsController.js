const knex = require("knex")(require("../knexfile"));

exports.createChat = (req,res) =>{
    console.log(req.body)
    knex('conversations')
    .insert(req.body)
    .then((converseData) =>{
        res.status(200).json(converseData)
    })
}

exports.getConversations = (req,res) =>{
    console.log(req.params)
    knex('conversations')
    .where({sender_id:req.params.userid})
    .orWhere({receiver_id:req.params.userid})
    .then ((userChat)=>
    {
        res.status(200).json(userChat)
    })
}

exports.checkConversations = (req,res) => {
    console.log(req.body)
    knex('conversations')
    .where(function (){
        this
        .where({sender_id:req.body.userId})
        .where({receiver_id:req.body.contactId})
    })
    .orWhere(function (){
        this
        .where({receiver_id:req.body.userId})
        .where({sender_id:req.body.contactId})
    })
    .then ((userChat)=>
    {
        res.status(200).json(userChat)
    })

}

exports.addMessage = (req,res) =>{
    knex('messages')
    .insert(req.body)
    .then ((messageData)=>
    {
        res.status(200).json(messageData)
    })
}

exports.getMessages = (req,res) =>{
    knex('messages')
    .where({conversation_id:req.params.conversationID})

    .then ((messageData)=>
    {
        res.status(200).json(messageData)
    })
}

exports.getOtherUser = (req,res) =>{
    knex('user')

}