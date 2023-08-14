const register = async (req, res) => {
    res.status(200).json({ msg: "Register New User" })
}

const login = async (req, res) => {
    res.status(200).json({ msg: "User Login" })
}

module.exports = { register, login }