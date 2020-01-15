const express = require('express');
const router = express.Router();


// CRUD Routes for Events

// Get all Events
router.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: "Show all Events" })
});


// Get One Event
router.get('/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Get Event ${req.params.id}` })
});


// Add Event
router.post('/', (req, res) => {
  res.status(200).json({ success: true, msg: "Show all Events" })
});


// Update Event
router.put('/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Update Event ${req.params.id}` })
});


// Delete Event
router.put('/:id', (req, res) => {
  res.status(200).json({ success: true, msg: `Delete Event ${req.params.id}` })
});


module.exports = router;