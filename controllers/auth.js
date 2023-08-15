const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
    const { name, email, password } = req.body

    //hash password with bcrypt
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const tempUser = { name, email, password: hashedPassword}
    const user = await User.create({...tempUser}) 
    res.status(StatusCodes.CREATED).json({ msg: "Created New User", data: user })
}

const login = async (req, res) => {
    res.status(StatusCodes.CREATED).json({ msg: "User Login" })
}

module.exports = { register, login }