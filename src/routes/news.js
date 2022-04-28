const express = require('express')
const router = express.Router()
const {
    authenticateUser
} = require('../middleware/authentication')
const newsController = require('../app/controllers/NewsController')
const pdfController = require('../app/controllers/PDFController')


// router.get('/exportPdf/:id', authenticateUser, newsController.exportPdf())
// router.get('/returnHome', authenticateUser, newsController.home)
router.post('/score', authenticateUser, newsController.score)

// router.get('/pdf/:id', authenticateUser, newsController.exportPdf)

router.get('/:id', authenticateUser, newsController.show)
router.get('/', authenticateUser, newsController.show)


module.exports = router