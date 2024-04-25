const DataModel = require('../models/dataModel');
const CountModel = require('../models/countModel');

// Controller function to add new data
const addData = async (req, res) => {
    const newData = req.body;
    try {
        console.log(newData);
        const savedData = await DataModel.create(newData);
        const addCount = await CountModel.findOneAndUpdate({},{$inc:{addCount:1}},{upsert:true})
        res.json({ message: 'Data added successfully', data: savedData });
    } catch (error) {
        console.error('Error adding data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller function to update existing data
const updateData = async (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    try {
        const result = await DataModel.findByIdAndUpdate(id, updatedData);
        const count = await CountModel.findOneAndUpdate({},{$inc:{updateCount:1}},{upsert:true});
        if (!result) {
            return res.status(404).json({ error: 'Data not found' });
        }
        res.json({ message: 'Data updated successfully' });
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = {
    addData,
    updateData
};
