const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Route Files
const events = require('./routes/events')


// Load env vars
dotenv.config({
  path: './config/config.env'
})

const app = express();


// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}


// Mount Routers
app.use('/api/v1/events', events);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server up and Running in ${process.env.NODE_ENV} mode on port ${PORT}`);

})