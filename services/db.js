const username = 'postgres';
const pws = 'hani100234';
const port = 5432;
const pgp = require('pg-promise')(/* options */);
const db = pgp('postgres://' + username + ':' + pws + '@localhost:' + port + '/unsecret');

function insertMessage(msg){
    const query = pgp.helpers.insert({body: msg}, null, 'messages');
    
    return db.none(query);
}

module.exports = {
    insertMessage
}