import mongoose from 'mongoose';
import 'dotenv/config';

//Defining the mongodb URL
// const mongoURL = 'mongodb://localhost:27017/Hotels';
const mongoURL = process.env.MONGO_URL_LOCAL;
// const mongoURL = process.env.MONGO_URL;

//set up mongodb connection;
mongoose.connect(mongoURL);

//additional settings for flexibility db is used to handle event using event listeners
const db = mongoose.connection;

// event listeners for db connection
db.on("connected", () => {
  console.log("Successfully connected with mongoDB server");
})

db.on("error", (err) => {
  console.log("Error while connectiong with mongoDB server", err);
})

db.on("disconnected", () => {
  console.log("Disconnected with MongoDB server");
})

//finally need to export the db connection
export default db;