var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

//GraphQL schema
var schema = buildSchema(`
  type Query {
    course(id: Int!): Course
    courses(topic: String): [Course]
  }
  type Mutation {
    updateCourseTopic(id: Int!, topic: String!): Course
  }
  type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
  }
`);

var coursesData = [
  {
    id: 1,
    title: 't1',
    author: 'a1',
    description: 'd1',
    topic: 't1',
    url: 'url1'
  },
  {
    id: 2,
    title: 't2',
    author: 'a2',
    description: 'd2',
    topic: 't2',
    url: 'url2'
  }
]

var getCourse = function (args) {
  var id = args.id;
  return coursesData.filter(course => {
    return course.id == id;
  })[0];
};

var getCourses = function (args) {
  if (args.topic) {
    var topic = args.topic;
    return coursesData.filter(course =>
      course.topic == topic);
  } else {
    return coursesData;
  }
}

var updateCourseTopic = function({id, topic}){
  coursesData.map(course => {
    if(course.id === id){
      course.topic = topic;
      return course;
    }
  });
  return coursesData.filter(course => course.id === id)[0];
}

// Root resolver, object containing a list of queries
var root = {
  course: getCourse,
  courses: getCourses,
  updateCourseTopic: updateCourseTopic
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