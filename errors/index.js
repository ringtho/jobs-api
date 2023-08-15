const BadRequestError = require('./bad-request')
const UnauthenticatedError = require('./unauthenticated')
const CustomAPIError = require('./custom-api')
const NotFoundError = require('./not-found')

module.exports = {
  BadRequestError,
  UnauthenticatedError,
  CustomAPIError,
  NotFoundError
}
