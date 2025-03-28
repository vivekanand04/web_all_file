const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.send("hello");
    const url=
    https.get(url,function(response){
        console.log(response.statuscode);
        response.log("data"function(data){
            const weatherdata=JSON.parse(data)
        })
    })
})
app.listen(3000, function () { console.log("server started on port 3000") ;})
