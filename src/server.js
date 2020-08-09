//server
const express = require("express");
const server = express();

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require("./pages.js");

//nunjucks config (template engine)
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
});

server
.use(express.urlencoded({extended: true}))
//static archives configs (css, scripts, images)
.use(express.static("public"))
//routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//localhost
.listen(5500);