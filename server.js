const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')

const ballRouter = require('./controllers/balls.js');

mongoose.connect(process.env.MONGODB_URI);


mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`);
})


app.use(cors({origin: 'http://localhost:5173'}));
app.use(express.json());
app.use('/balls', ballRouter);


app.listen('3000', () => {
    console.log('the express app is ready!');
})