const mongoose = require("mongoose");
const User = require("../models/userModel"); // Import your Mongoose User model

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/seedData");

// Define the seed data
const userData = [
  { name: "Ramesh", email: "ramesh@example.com", password: "password1" },
  { name: "Ram", email: "ram@example.com", password: "password2" },
  //  we can add more here
];

// Function to seed the database
async function seedDatabase() {
  try {
    // Clear existing data
    await User.deleteMany({});

    // Insert seed data
    await User.insertMany(userData);

    console.log("Seed data added successfully.");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    // Close the database connection
    mongoose.disconnect();
  }
}

// Call the seed function
seedDatabase();
