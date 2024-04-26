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

// Connect to MongoDB
connectDB();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
