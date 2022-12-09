const mongoose = require("mongoose")

const Detail = mongoose.Schema({
    brandname:String,
    brandicon:String,

    link :[
        {
            label:String,
            url : String,
        }
    ]
})

module.exports = mongoose.model("detail",Detail);