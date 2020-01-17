const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Event = require('../models/Event');

// Middleware Functions


// @desc      Get All Events
// @route     GET /api/v1/events
// @access    Public
exports.getEvents = asyncHandler(async (req, res, next) => {
  const events = await Event.find();

  res.status(200).json({
    success: true,
    count: events.length,
    data: events
  })

})



// @desc      Get Event
// @route     GET /api/v1/events/:id
// @access    Public
exports.getEvent = asyncHandler(async (req, res, next) => {
  const event = await Event.findById(req.params.id);

  // Check if ID is not in DB
  if (!event) {
    return next(
      new ErrorResponse(`Event not found with id of ${req.params.id}`, 404)
    )
  }

  res.status(200).json({
    success: true,
    data: event
  })
})



// @desc      Create new Event
// @route     POST /api/v1/events
// @access    Private
exports.createEvent = asyncHandler(async (req, res, next) => {
  const event = await Event.create(req.body);

  // Succesfully Created Ressource
  res.status(201).json({
    success: true,
    data: event
  })
})



// @desc      Update Event
// @route     PUT /api/v1/events/:id
// @access    Private
exports.updateEvent = asyncHandler(async (req, res, next) => {

  const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })

  // Error Handling if not Existing
  if (!event) {
    return next(
      new ErrorResponse(`Event not found with id of ${req.params.id}`, 404)
    )
  }

  res.status(200).json({
    sucess: true,
    data: event
  })
})



// @desc      Delete Events
// @route     DELETE /api/v1/events
// @access    Private
exports.deleteEvent = asyncHandler(async (req, res, next) => {
  const event = await Event.findByIdAndDelete(req.params.id)

  // Error Handling if not Existing
  return next(
    new ErrorResponse(`Event not found with id of ${req.params.id}`, 404)
  )

  res.status(200).json({
    success: true,
    data: {}
  })

})