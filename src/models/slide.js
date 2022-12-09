const mongoose = require("mongoose")

const Slider  = mongoose.Schema({
    slider:[
        {
            imgurl:String,
            heading:String,
            subheading:String,
            class:String
            
        }
    ]
})

module.exports = mongoose.model("slider",Slider);

