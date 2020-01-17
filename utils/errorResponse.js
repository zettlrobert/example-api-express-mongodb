class ErrorResponse extends Error {
  constructor(message, statusCode) {
    // Call Constructor of Error Class
    super(message);
    this.statusCode = statusCode
  }
}

module.exports = ErrorResponse;