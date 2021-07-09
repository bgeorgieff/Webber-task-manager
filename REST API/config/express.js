const express = require('express')
const cookieParser = require('cookie-parser')
const secret = process.env.SECRET

module.exports = (app) => {
    app.use(express.json())

    app.use(express.urlencoded({
        extended: true
    }));
    
    app.use(cookieParser(secret))
}