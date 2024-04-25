const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connectDB = require('./utils/database');
const dataRoutes = require('./routes/dataRoutes');
const countRoutes = require('./routes/countRoutes');

const app = express();
const PORT = 3001;
app.use(bodyParser.json());
app.use('/api/data',dataRoutes)
app.use('/api/count',countRoutes)

// Middleware

// Connect to MongoDB
connectDB();

// mongoose.connect('mongodb://localhost:27017/counter');

// // Create a Mongoose schema
// const dataSchema = new mongoose.Schema({
//     data: String,
// });

// const counterSchema = new mongoose.Schema({
//     addCount: {
//         type: Number,
//         default: 0,
//     },
//     updateCount: {
//         type: Number,
//         default: 0,
//     }
// });


// // Create a Mongoose model
// const DataModel = mongoose.model('Data', dataSchema);
// const CountModel = mongoose.model('Count', counterSchema);


// // API to add data
// app.post('/api/add', async (req, res) => {
//     const newData = req.body;
//     try {
//         const savedData = await DataModel.create(newData);
//         const addCount = await CountModel.findOneAndUpdate({},{$inc:{addCount:1}},{upsert:true})
//         res.json({ message: 'Data added successfully', data: savedData });
//     } catch (error) {
//         console.error('Error adding data:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// // API to edit data
// app.put('/api/edit/:id', async (req, res) => {
//     const id = req.params.id;
//     const updatedData = req.body;
//     try {
//         const result = await DataModel.findByIdAndUpdate(id, updatedData);
//         const updateCount = await CountModel.findOneAndUpdate({},{$inc:{updateCount:1}},{upsert:true})

//         if (!result) {
//             return res.status(404).json({ error: 'Data not found' });
//         }
//         res.json({ message: 'Data updated successfully' });
//     } catch (error) {
//         console.error('Error updating data:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });


// // API to get the count of add and update API calls
// app.get('/api/count', async (req, res) => {
//     try {
//         const counts = await CountModel.findOne({});
//         res.json(counts);

//     } catch (error) {
//         console.error('Error getting counts:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
