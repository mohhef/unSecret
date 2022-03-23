const express = require('express');
const app = express();

const messagesRouter = require("./routes/messages");

app.use('/', messagesRouter);

app.listen(3000, function() {
    console.log('Listen at Port 3000');
});