const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();

const chatbotRoutes = require('./routes/chatbot.route.js')

const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/chatbotDB")
.then(() => {console.log("Connected to MongoDB")})
.catch((error) => {console.log("Error connecting to MongoDB: ", error)})

app.use(express.json())
app.use(cors())
app.use('/bot/v1/',chatbotRoutes)


app.get('/', (req, res) => {
    res.send("hello World!!!")
})

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`)})