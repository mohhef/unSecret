var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

//GraphQL schema
var schema = buildSchema(`
  type Query {
    message: String
  }
`);

// Root resolver, object containing a list of queries
var root = {
  message: () => 'Hello World2'
};

// Create an express server and GraphQL endpoint
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

//start the server
app.listen(4000, () => console.log("server is running"));