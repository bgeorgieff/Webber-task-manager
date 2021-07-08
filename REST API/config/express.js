const express = require('express')
const cookieParser = require('cookie-parser')
const secret = 'secret'

module.exports = (app) => {
    app.use(express.json())

    app.use(express.urlencoded({
        extended: true
    }));

    app.use(cookieParser(secret))
}