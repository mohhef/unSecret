const express = require("express");
const router = express.Router();
const db = require("../services/db");
const cors = require('cors');

router.use(express.json());
router.use(cors());
// router.use(express.urlencoded({ extended: false }));

router.post('/create', function(req, res){
    const {body, countdown_type} = req.body;
    // console.log(req.body);
    //check if the message and countdown_type are empties
    if(body && countdown_type){
        const insertionResult = db.insertMessage(body, countdown_type);
        
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