const {
    redirect
} = require('express/lib/response')
const Question = require('../models/Question')

class QuizController {
    //[GET] quiz/question-form
    question(req, res, next) {
        if (!req.user) {
            return res.redirect('/')
        }
        res.render('question_form')
    }
    //[POST] quiz/question-form
    createQuestion(req, res, next) {
        if (!req.user) {
            return res.redirect('/')
        }
        const question = new Question(req.body)
        question.save()
            .then(() => res.render('question_form'))
            .catch(next)
    }
    //[GET] quiz/getQuestion
    getQuestion(req, res, next) {
        res.render('news')
    }
    //[GET] quiz/store
    store(req, res) {
        res.send('news detail')
    }
}

module.exports = new QuizController