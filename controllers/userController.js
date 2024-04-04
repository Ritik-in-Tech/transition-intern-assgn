const User = require("../models/userModel");
// function to add user
const addUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!email || !name || !password) {
      return res.status(404).json({ error: "Please provide all the fields" });
    }

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    // Create new user
    const newUser = new User({
      name,
      email,
      password,
    });

    // Save user to the database
    await newUser.save();

    return res
      .status(201)
      .json({ message: "User created successfully.", newuser: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// function to edit the user details
const editUser = async (req, res) => {
  try {
    const { id, name, email, password } = req.body;
    if (!id) {
      return res
        .status(404)
        .json({ error: "Please provide the ID of the user" });
    }
    // Find user by id and update
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json({
      message: "User edited successfully.",
      editedUser: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// function to update user details
const updateUser = async (req, res) => {
  try {
    const { id } = req.body;
    const { name, email, password } = req.body;

    if (!id) {
      return res
        .status(404)
        .json({ error: "Please provide the ID of the user" });
    }

    // Find user by id and update
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    return res
      .status(200)
      .json({ message: "User updated successfully", updateduser: updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addUser, editUser, updateUser };
