const CountModel = require('../models/countModel');

// Controller function to add new data
const getData = async (req, res) => {
    const newData = req.body;
    try {
        
        const counts = await CountModel.findOne({});
        res.json({counts});
    } catch (error) {
        console.error('Error fetching counts data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
   getData
};
