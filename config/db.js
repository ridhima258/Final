const mongoose = require("mongoose");

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
const connectionString = "mongodb://ridhima258:ridhima258@ds155626.mlab.com:55626/e-voting-db";

connectDb = async () => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected");
    } catch (err) {
        console.log(err);
    }
};
connectDb();