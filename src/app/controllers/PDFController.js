// const {
//     compile
// } = require("handlebars")
// const {
//     redirect
// } = require('express/lib/response')
// var mongoose = require('mongoose')
// var random = require('mongoose-random')
// const Question = require('../models/Question')
// const Record = require('../models/Record')
// const User = require("../models/User")
// var pdf = require("pdf-creator-node")
// var fs = require("fs-extra")
// const puppeteer = require('puppeteer')
// const hbs = require('handlebars')
// const path = require('path')
// const {
//     mongooseToObject
// } = require('../utils/mongoose')
// const {
//     moveMessagePortToContext
// } = require('worker_threads')
// const moment = require('moment')
// const req = require('express/lib/request')

// // const record = function (req, res, next) {
// //     const record = Record.find({
// //         _id: req.params.id
// //     })
// //     return record
// // }

// const compile = async function (templateName) {
//     console.log("1111111111111111")
//     const record = Record.find({
//         _id: req.params.id
//     })
//     console.log('user id record: ' + req.params.id)
//     console.log(record)
//     const filePath = `${templateName}.hbs`
//     const html = await fs.readFile(filePath, 'utf-8')
//     return hbs.compile(html)(record)
// };
// hbs.registerHelper('dateFormat', function (value, format) {
//     return moment(value).format(format)
// })
// // this.compile('result') = this.compile.bind(this) =>{
// // this.compile = this.compile.bind(this);
// async function exportPdf() {
//     try {
//         console.log(' id record1: ' + req.params.id)
//         const browser = await puppeteer.launch();
//         const page = await browser.newPage();
//         console.log('22222222222222222222222222222222222222222')
//         const content = compile('result')
//         await page.setContent(content)
//         await page.emulateMediaFeatures('screen')
//         await page.pdf({
//             path: 'mypdf.pdf',
//             format: 'A4',
//             printBackground: true
//         })
//         console.log("done")
//         await browser.close()
//         process.exit()
//     } catch (e) {
//         console.log(e)
//     }
// }
// //  exportPdf(req, res, next) {

// // }

// module.exports = {
//     exportPdf
// }