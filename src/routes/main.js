const express = require("express");
const { findById } = require("../models/main");

const routes = express.Router();
const Detail = require("../models/main")
const Slider = require("../models/slide")
const Services = require("../models/service")
const Contact = require("../models/contact")

routes.get("/",async(req,res)=>{
    const detail  = await Detail.findOne({"__id":"6391c81f56155c119f397a5f"});
    const slider = await Slider.findOne({"__id":"6391e14aa7d00a20f4b2db9e"});
    const service = await Services.findOne({"__id":"639200dd522db5991a3c9117"});
    // console.log(slider);
    res.render("index",{
        detail:detail,
        slider:slider,
        service:service
    });
})

routes.post("/process-contact-form",async(req,res)=>{
    try{
        const data = await Contact.create(req.body)
        data.save();
        req.redirect("/")
    }catch(err){
        console.log(err);
        res.redirect("/")
    }
})

module.exports = routes;