const mongoose = require('mongoose')
const Schema = mongoose()

const resultModel = new Schema({
    username : { type: String },
    result : { type: Array, default: []},
    attempts : { type: Number, default: 0},
    points : { type: Number, default: 0},
    flag : { type: String, default: ""},
    createdAt : { type: Date, default: Date.now}
});

export default mongoose.model('Result', resultModel)