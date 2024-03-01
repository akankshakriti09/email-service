const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true
    }
})
 
const Subscriber = mongoose.model("Subscriber", userSchema)

module.exports = Subscriber;