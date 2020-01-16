const mongoose = require('mongoose');


// mongodb + srv://zerodev:<password>@zerodev-atlas-cluster-u457t.mongodb.net/test?retryWrites=true&w=majority

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
  `);
}


module.exports = connectDB;