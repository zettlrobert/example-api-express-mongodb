const express = require('express');
const {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent
} = require('../controllers/events')

const router = express.Router();


// Route to Controller Methods
router.route('/')
  .get(getEvents)
  .post(createEvent)


router.route('/:id')
  .get(getEvent)
  .put(updateEvent)
  .delete(deleteEvent)

module.exports = router;