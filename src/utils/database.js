const mongoose = require('mongoose');

// MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/counter';

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("connected to MongoDB");
    } catch (error) {
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
