const express = require("express")
const app = express();
const hbs = require("hbs")
const port = process.env.PORT|8000
const bodyParse = require("body-parser")
app.use("/statics",express.static("public"))
const routes = require("./routes/main")
// database
require("./models/database")

// engine tempelete
app.set("view engine","hbs")
app.set("views","views")
hbs.registerPartials("views/partials")


app.use(bodyParse.urlencoded({
    extended:true
}))
app.use("",routes);

app.listen(port,()=>{
    console.log(`Server started ${port}`);
})