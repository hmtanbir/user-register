const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    greetings: String
    welcome(name: String!): String
    users: [User]
    user(id: ID!): User
  }
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    address: String!
    phone: String!
    email: String!
    age: Int
  }
  type Mutation {
    create(firstName: String, lastName: String, address: String, phone: String, email: String, age: Int): User
    update(id: ID, firstName: String, lastName: String, address: String, phone: String, email: String, age: Int): User
    delete(id: ID): User  
  }
`;

// User Object


module.exports = { typeDefs };
