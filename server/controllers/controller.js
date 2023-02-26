const Questions = require('../models/questionSchema')
const Results = require('../models/resultSchema')
const { question, answers } = require('../database/data')


module.exports.getQuestions = async(req,res) => {
   try {
        const q = await Questions.find();
        res.json(q)
   } catch (error) {
        res.json({ error })
   }
}

module.exports.insertQuestions = async(req,res) => {
    try {
        Questions.insertMany({ questions : question, answers : answers }, function(err,data) {
            res.json({ msg: "Data inserted successfully..."})
        })
    } catch (error) {
        res.json({ error })
    }
}

module.exports.deleteQuestions = async(req,res) => {
    try {
        await Questions.deleteMany()
        res.json({ msg : "Data deleted successfully..."})
    } catch (error) {
        res.json({ error })
    }
}

module.exports.getResults = async(req,res) => {
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

module.exports.storeResult = async(req,res) => {
    try {
        const { username, result, attempts, points, flag } = req.body;
        if(!username && !result) throw new Error('Data not provided...')

        Results.create({ username, result, attempts, points, flag }, function(err,data) {
            res.json({ msg : "Result stored successfully..."})
        })
    } catch (error) {
        res.json({ error })
    }
}

module.exports.deleteResult = async(req,res) => {
    try {
        await Results.deleteMany();
        res.json({ msg : "Result deleted successfully..."})
    } catch (error) {
        res.json({ error })
    }
}