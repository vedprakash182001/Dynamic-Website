const mongoose = require("mongoose")
const db = "mongodb://localhost:27017/project1"
const detail = require("./main")
const slider = require("./slide")
const services = require("./service")
mongoose.connect(db,{
    useNewUrlParser :true,
}).then(()=>{
    console.log("Connection Successfull");
    // detail.create({slider.create({
    //     slider :[
    //         {
    //             imgurl:"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg",
    //             heading:"Forest",
    //             subheading:"This is nice picture of morning forest"
    //         },
    //         {
    //             imgurl:"https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg",
    //             heading :"Ocean",
    //             subheading:"Evening Sunset from Sea"
    //         },
    //         {
    //             imgurl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdUY_t-0eJTdknRDx71c8Ujf3tkoDFQs_6A&usqp=CAU",
    //             heading:"Mountain",
    //             subheading:"Nothing is much harder than me"
    //         }
    //     ]
    // })
    //     brandname : "Ved Prakash",
    //     brandicon:"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg",
    //     link :[
    //         {
    //             label : "Home",
    //             url : "/"
    //         },
    //         {
    //             label : "Services",
    //             url :"Services"
    //         },
    //         {
    //             label :"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label : "About",
    //             url:"/about"
    //         },
    //         {
    //             label : "Contact us",
    //             url :"/contact"
    //         }
    //     ]
    // })

    // slider.create({
    //     slider :[
    //         {
    //             imgurl:"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg",
    //             heading:"Forest",
    //             subheading:"This is nice picture of morning forest",
    //             class:"active"
    //         },
    //         {
    //             imgurl:"https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg",
    //             heading :"Ocean",
    //             subheading:"Evening Sunset from Sea",
    //             class:""
    //         },
    //         {
    //             imgurl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdUY_t-0eJTdknRDx71c8Ujf3tkoDFQs_6A&usqp=CAU",
    //             heading:"Mountain",
    //             subheading:"Nothing is much harder than me",
    //             class:""
    //         }
    //     ]
    // })

    // services.create(
    // {
    //     servic:
    //     [
    //         {
    //             serviceIcon:"fab fa-accusoft",
    //             serviceHeading:"Hockey",
    //             serviceText:"Hockey is one of the oldest game of our country",
    //             link1:[
    //                 {
    //                     text :"check",
    //                     url :"hello"
    //                 }
    //             ],
    //             link2:[
    //                 {
    //                     text:"Support",
    //                     url:"hhh"
    //                 }
    //             ]
    //         },
    //         {
    //             serviceIcon:"fab fa-accusoft",
    //             serviceHeading:"Cricket",
    //             serviceText:"A gun is no more dangerous than a cricket bat in the hands of a madman.",
    //             link1:[
    //                 {
    //                     text :"check",
    //                     url :"hello"
    //                 }
    //             ],
    //             link2:[
    //                 {
    //                     text:"Support",
    //                     url:"hhh"
    //                 }
    //             ],
    //         },
    //         {
    //             serviceIcon:"fab fa-accusoft",
    //             serviceHeading:"Volley Ball",
    //             serviceText:"It's important to just kind of get away from your sport until you miss it .",
    //             link1:[
    //                 {
    //                     text :"check",
    //                     url :"hello"
    //                 }
    //             ],
    //             link2:[
    //                 {
    //                     text:"Support",
    //                     url:"hhh"
    //                 }
    //             ]
    //         },
    //         {
    //             serviceIcon:"fab fa-accusoft",
    //             serviceHeading:"Badminton",
    //             serviceText:"Take the Badminton with the Good. Life is a game; Badminton is serious.",
    //             link1:[
    //                 {
    //                     text :"check",
    //                     url :"hello"
    //                 }
    //             ],
    //             link2:[
    //                 {
    //                     text:"Support",
    //                     url:"hhh"
    //                 }
    //             ],
    //         },
    //         {
    //             serviceIcon:"fab fa-accusoft",
    //             serviceHeading:"Hockey",
    //             serviceText:"Hockey is one of the oldest game of our country",
    //             link1:[
    //                 {
    //                     text :"check",
    //                     url :"hello"
    //                 }
    //             ],
    //             link2:[
    //                 {
    //                     text:"Support",
    //                     url:"hhh"
    //                 }
    //             ],
    //         },
    //         {
    //             serviceIcon:"fab fa-accusoft",
    //             serviceHeading:"Hockey",
    //             serviceText:"Hockey is one of the oldest game of our country",
    //             link1:[
    //                 {
    //                     text :"check",
    //                     url :"hello"
    //                 }
    //             ],
    //             link2:[
    //                 {
    //                     text:"Support",
    //                     url:"hhh"
    //                 }

    //             ],
    //         }
    //     ],   
    // })
}).catch(()=>{
    console.log("no connection");
})
// mongoose.set("strictQuery",)