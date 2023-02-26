
module.exports.getQuestions = async(req,res) => {
    res.json("question api get request")
}

module.exports.insertQuestions = async(req,res) => {
    res.json("question api post request")
}

module.exports.deleteQuestions = async(req,res) => {
    res.json('question api delete request')
}

module.exports.getResults = async(req,res) => {
    res.json("result api get request")
}

module.exports.insertResult = async(req,res) => {
    res.json("result api post request")
}

module.exports.deleteResult = async(req,res) => {
    res.json("result api delete request")
}