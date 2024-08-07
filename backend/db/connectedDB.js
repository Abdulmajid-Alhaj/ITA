const mongoose = require('mongoose')
require('dotenv').config()

const connectedDB = () => {
    mongoose.connect(process.env.MONGOOSE_URI)
    .then(() => {console.log('MongoDB Connected')})
    .catch((err) => {console.log(err)})
}

module.exports = connectedDB