var express = require('express')
var router = express.Router()
const { getQuestions, insertQuestions, deleteQuestions, getResults, insertResult, deleteResult } = require('../controllers/controller')

router.get('/questions', getQuestions)

router.post('/questions', insertQuestions)

router.delete('/questions', deleteQuestions)

router.get('/results', getResults)

router.post('/results', insertResult)

router.delete('/results', deleteResult)

module.exports = router