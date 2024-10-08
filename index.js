const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const mongoose = require("mongoose");
const { resolvers } = require("./resolvers.js");
const { typeDefs } = require("./models/typeDefs.js");

const MONGO_URI = "mongodb://localhost:27017/user-register";

// Database connection
mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log(`Db Connected`);
    })
    .catch(err => {
        console.log(err.message);
    });

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, {
    listen: { port: 4000 },
}).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});