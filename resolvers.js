// GraphQL Resolvers
const {User} = require("./models/User");
const resolvers = {
    Query: {
        greetings: () => "GraphQL is Awesome",
        welcome: (parent, args) => `Hello ${args.name}`,
        users: async (parent, args) => {
            const { age, lastName } = args;
            const filter = {};

            if (age) {
                filter.age = age; // Use $gt for greater than
            }
            if (lastName) {
                filter.lastName = lastName;
            }

            return await User.find(filter);
        },
        user: async (parent, args) => await User.findById(args.id),
    },
    Mutation: {
        create: async (parent, args) => {
            const { firstName, lastName, address, phone, email, age } = args;
            const newUser = new User({ firstName, lastName, address, phone, email, age });
            await newUser.save();
            return newUser;
        },
        update: async (parent, args) => {
            const { id } = args;
            const result = await User.findByIdAndUpdate(id, args, { new: true });
            return result;
        },

        delete: async (parent, args) => {
            const { id } = args;
            const result = await User.findByIdAndDelete(id);

            if (!result) {
                throw new Error(`Student with ID ${id} not found`);
            }

            return result;
        }

    }
};

module.exports = { resolvers };
