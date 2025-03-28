import express from "express";
const app=express();
const port=3012;

app.get("/",(req,res)=>{             /*pahle get method ke karan "hello" return karte the but is bar "its weekday" and "work hard" return kiya hai and 
                                         isko dataType and advice me store kar diya hai jo index.ejs me hai.ab index.ejs trigger hoga and waha pe 
                                         html code print ho jayega.......PAR YE DYNAMIC INPUT WALA(index2.js)ME VALID NAHI HAI  */
                                         
    res.render("index.ejs",
   {
    dataType:"its weekday",
    advice:"work hard",
 
    }

    );
});
app.listen(port,()=>{
    console.log(`server running at port ${port}`);
});