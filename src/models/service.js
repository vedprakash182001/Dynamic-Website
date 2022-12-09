const mongoose = require("mongoose")

const Services =  mongoose.Schema({
    servic:[
        {
            serviceIcon:String,
            serviceHeading:String,
            serviceText:String,
            link1:[{
                text:String,
                url:String
            }],
            link2:[
                {
                    text:String,
                    url:String
                }
            ]
        }
    ]
})

module.exports = mongoose.model("services",Services)