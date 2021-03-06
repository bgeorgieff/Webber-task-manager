const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const secret = process.env.SECRET

module.exports = (app) => {
    app.use(cors({ credentials: true, origin: process.env.APP_URL }))
    app.use(express.json())

    app.use(express.urlencoded({
        extended: true,
    }));
    
    app.use(cookieParser(secret))
}