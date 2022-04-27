const express = require('express')
const router = express.Router()
const {authenticateUser} = require('../middleware/authentication')

const quizController = require('../app/controllers/QuizController')
// router.get('/:slug', quizController.getQuestion)
router.get('/question-form', authenticateUser,quizController.question)
router.post('/createQuestion', authenticateUser,quizController.createQuestion)


module.exports = router