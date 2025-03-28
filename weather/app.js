const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.send("hello");
    const url="https://api.openweathermap.org/data/2.5/weather?&q=islampur&appid=28fa74736666736fedbcd9f8fbbeb5b0&units=metric"
    https.get(url,function(response){
        console.log(response.statuscode);
        response.log("data"function(data){
            const weatherdata=JSON.parse(data)
        })
    })
})
app.listen(3000, function () { console.log("server started on port 3000") ;})
// const express = require("express");
// const app = express();
// app.get("/", function (req, res) {
//         res.send("sserver is up and running");
//
//     })
//         app.listen(3000, function () { console.log("server started on port 3000.") ;
//     })
