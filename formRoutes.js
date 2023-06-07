const { Router } = require('express');
const router = Router();
const Message = require('./formModel');
const path = require('path');

router.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

router.post('/', (req,res) => {
    let newMessage = new Message({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
    })
    newMessage.save()
    .then(() => {
        console.log("Message saved to MongoDB");
        res.sendFile(path.join(__dirname, 'answer.html'))
    })
    .catch((error) => {
        console.error("Error saving message to MongoDB:", error);
        res.redirect('/');
    });
    
})

module.exports = router;