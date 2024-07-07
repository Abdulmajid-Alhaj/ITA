require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const connectedDB = require('./db/connectedDB')

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.listen(process.env.PORT || 5000 , () => {
    connectedDB()
    console.log(`Server listening on ${process.env.PORT}`);
})