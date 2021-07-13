const router = require('../routes/')

module.exports = (app) => {

    app.use('/api/user', router.users)

    app.use('/api/board', router.board)
    
    app.use('/api/create', router.columns)

    app.use('/api/create-new', router.tasks)

    app.use('/api/columns', router.columns)


    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. </h1>'))
};