const User = require("../model/User");

const userRegistration = async (req, res) => {
    try {
        if (await User.findOne({ userName: req.body.userName }))
            return res.status(201).json({ error: "This username already exist" })
        if (await User.findOne({ email: req.body.email }))
            return res.status(201).json({ error: "This email already registered" })

        const user = await User.create({
            userName: req.body.userName,
            nickName: req.body.nickName,
            email: req.body.email,
            password: req.body.password,
        })
        return res.status(200).json({ error: "You are registered successfully, Please login" })
    } catch (err) {
        return res.status(500).json({ error: err })
    }
}


module.exports = {userRegistration};