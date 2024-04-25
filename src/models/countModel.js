const mongoose = require('mongoose');

const countSchema = new mongoose.Schema({
    addCount: {
        type: Number,
        default: 0,
    },
    updateCount: {
        type: Number,
        default: 0,
    }
});

// Create a Mongoose model
const CountModel = mongoose.model('Count', countSchema);

module.exports = CountModel;
