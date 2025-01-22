const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    img:{
        type:String,
    },
    summary:{
        type:String,
    },

})

module.exports = mongoose.model('todo', todoSchema)