const express= require('express')
const router = express.Router();

router.get('/users2', function(req, res){
    res.json({
        usersList:["user1","user2"]
    })
})

router.get('/home', function(req, res)
{
    res.json({
        message:'welcome User'
    });
})

module.exports =router