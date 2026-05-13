const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  try {
    console.log(req.body);

    const { username, email, password } = req.body;

    const isUserAlreadyExits = await userModel.findOne({
      email,
    });

    if (isUserAlreadyExits) {
      return res.status(409).json({
        message: "user already exits",
      });
    }

    const user = await userModel.create({
      username,
      email,
      password,
    });

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET
    );

    res.status(201).json({
      message: "User Registered Successfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = { registerUser };
