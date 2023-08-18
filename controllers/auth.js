const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')

const register = async (req, res) => {
  const user = await User.create({ ...req.body })
  res.status(StatusCodes.CREATED).json({ msg: 'Created New User', data: user })
}

const login = async (req, res) => {
  res.status(StatusCodes.CREATED).json({ msg: 'User Login' })
}

module.exports = { register, login }
