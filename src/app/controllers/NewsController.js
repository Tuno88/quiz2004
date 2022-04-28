const {
    redirect
} = require('express/lib/response')
var mongoose = require('mongoose')
var random = require('mongoose-random')
const Question = require('../models/Question')
const Record = require('../models/Record')
const User = require("../models/User")
var pdf = require("pdf-creator-node")
var fs = require("fs-extra")
const puppeteer = require('puppeteer')
const hbs = require('handlebars')
const path = require('path')
const {
    mongooseToObject
} = require('../utils/mongoose')
const {
    moveMessagePortToContext
} = require('worker_threads')
const moment = require('moment')
const req = require('express/lib/request')
var count = 0
class NewsController {
    //[GET] /news
    index(req, res, next) {
        res.render('news')
    }
    //[GET] /news/:slug
    show(req, res, next) {
        // if (!req.user) {
        //     return res.redirect('/')
        // }
        Question.find({}).skip(count).limit(2)
            .then(questions => {
                questions = (questions.sort(() => Math.random() - 0.5)).map(question => question.toObject())
                count += 2
                res.render('mypage', {
                    questions
                })
            })
            .catch(next)
    }
    //     Question.find({}).limit(2)
    //         .then(questions => {questions = questions.map(question => question.toObject())

    //             res.render('mypage',{questions})
    //         })
    //         .catch(next)
    // }


    //[POST] /mypage/score
    score(req, res, next) {
        if (!req.user) {
            return res.render('/score')
        }
        const numberOfQuestions = 2;
        var score = 0;
        const questionid = req.body.questionid
        console.log("req.body:----------" + req.body)
        console.log("------------quiz user1: " + req.user.userId)

        Promise.all(questionid.map(q => Question.findById(q))).then(question => {
            var record = new Record({
                user: req.user.userId,
            })
            var questions = []
            var point = 0;
            console.log("question????? " + question)
            console.log("------------quiz user: " + req.user)
            for (let i = 0; i < numberOfQuestions; i++) {
                if (req.body[questionid[i]] == question[i].answer) {
                    point = 1
                    score += point

                } else {
                    point = 0
                }
                var SingleQuestion = {
                    name: question[i].name,
                    content: question[i].question,
                    selectedOption: req.body[questionid[i]],
                    score: point
                }
                questions = [...questions, SingleQuestion]
                // record.question[i] = SingleQuestion
                console.log("single question------" + record.question)
            }
            record.question = questions
            record.score = score
            console.log("record is  ------ " + record)
            record.save()
            res.render('result', {
                record: mongooseToObject(record)
            })
        })
    }

    home(req, res, next) {
        res.render('home')
    }
    //export PDF part
    record = function (req, res, next) {
        const record = Record.find({
            _id: req.params.id
        })
        return record
    }
    async compile(templateName, record) {
        console.log("1111111111111111")

        console.log('user id record: ' + req.params.id)
        console.log(record)
        const filePath = `${templateName}.hbs`
        const html = fs.readFile(filePath, 'utf-8')
        return hbs.compile(html)(record)
    };
    // this.compile('result') = this.compile.bind(this) =>{
    // this.compile = this.compile.bind(this);
    async exportPdf(req, res, next) {
        try {
            console.log(' id record1: ' + req.params.id)
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            console.log('22222222222222222222222222222222222222222')
            const content = compile('/views/result', record)
            await page.setContent(content)
            await page.emulateMediaFeatures('screen')
            await page.pdf({
                path: 'mypdf.pdf',
                format: 'A4',
                printBackground: true
            })
            console.log("done")
            await browser.close()
            process.exit()
        } catch (e) {
            console.log(e)
        }
    }
}
//[GET] pdf/:id




module.exports = new NewsController