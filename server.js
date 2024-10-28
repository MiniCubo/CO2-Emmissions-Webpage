const express = require("express");
const https = require("https");
const fs = require("fs");
const csv = require("fast-csv");

const app = express();

app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));

app.route("/")
.get((req, res)=>{
    res.render("index", {title: "Carbon Bank"});
});

app.use("/timelapse", (req, res, next)=>{
    req.customdata = []
    const readable = fs.createReadStream(__dirname + "/public/datos/timelapsedata.csv").pipe(csv.parse({}));
    readable.on("data", (data)=>{
        req.customdata.push(data);
    })
    .on("end", ()=>{
        next();
    });
});

app.route("/timelapse")
.get((req, res)=>{
    var info = req.customdata;
    res.render("timelapse", {title:"CO2 Emmisions", info});
});

app.listen(PORT, () => {
    console.log("Listening to port " + PORT);
  });