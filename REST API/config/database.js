const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => {
    return mongoose.connect(config.dbURL, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
        autoIndex: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log(`${('*').repeat(10)} Connected to Database ${('*').repeat(10)}`);
    })
}