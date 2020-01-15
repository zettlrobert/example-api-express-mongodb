// Middleware Functions


// @desc      Get All Events
// @route     GET /api/v1/events
// @access    Public
exports.getEvents = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all Events" })
}


// @desc      Get Event
// @route     GET /api/v1/events/:id
// @access    Public
exports.getEvent = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Get Event ${req.params.id}` })
}


// @desc      Create Events
// @route     POST /api/v1/events
// @access    Private
exports.createEvent = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create Event" })
}


// @desc      Update Event
// @route     PUT /api/v1/events/:id
// @access    Private
exports.updateEvent = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update Event ${req.params.id}` })
}


// @desc      Delete Events
// @route     DELETE /api/v1/events
// @access    Private
exports.deleteEvent = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete Event ${req.params.id}` })
}