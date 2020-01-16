const mongoose = require('mongoose');
const color = require('colors')


const connectDB = async () => {
  // URI, 
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  console.log(`
  MongoDB Host: ${conn.connection.host} \n
  Connected to DB: ${conn.connection.name}
  `.brightGreen.bold);
}


module.exports = connectDB;