const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
   data: String
});

// Create a Mongoose model
const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;