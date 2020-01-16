const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db')
const colors = require('colors');
const errorHandler = require('./middleware/error');


// Load env vars
dotenv.config({
  path: './config/config.env'
})


// Connect to Database
connectDB();

const app = express();


// Body parser
app.use(express.json());

// Route Files
const events = require('./routes/events')


// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}


// Mount Routers
app.use('/api/v1/events', events);
// Middleware is executed in linear ORDER 
app.use(errorHandler);





const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server up and Running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
})

// Handle undhandled promise rejections

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);

  // Close server & exit process
  server.close(() => process.exit(1))
})