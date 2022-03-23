const express = require("express");
const router = express.Router();
const db = require("../services/db");

router.use(express.urlencoded({ extended: false }));

router.post('/create', function(req, res){
    const {message} = req.body;
    
    //check if the message is empty
    if(message){
        const insertionResult = db.insertMessage(message);
        
        insertionResult.then(() => {
            // success;
            res.sendStatus(200);
        })
        .catch(error => {
            // error;
            console.error(error);
            res.sendStatus(500);
        });

    }else{
        console.log("message is empty");
        res.sendStatus(400);
    }
});

module.exports = router;