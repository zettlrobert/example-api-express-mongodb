const mongoose = require('mongoose');
const slugify = require('slugify');


const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name can not be more than 50 characters']
  },
  // slug --> URL friendly Version of the Name
  slug: String,
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [750, 'Description can not be more than 750 characters']
  },
  website: {
    type: String,
    // RegEx http/https Website
    match: [
      /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/,
      'Please use a valid URL with HTTP or HTTPS'
    ]
  },
  email: {
    type: String,
    required: [true, 'Please add an address']
  },
  location: {
    // GeoJson Point
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    },
    formatedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  photo: {
    // Name of the File
    type: String,
    default: 'no-photo.jpg'
  },
  houseing: {
    type: Boolean,
    default: false
  },
  camping: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


// Create Event Slug from the Name -- mongoose middleware/hook
// normal function, arrow handles scope differently
EventSchema.pre('save', function (next) {
  console.log('Slugify ran', this.name);
  this.slug = slugify(this.name, {
    lower: true
  })
  next();
});


module.exports = mongoose.model('Event', EventSchema);