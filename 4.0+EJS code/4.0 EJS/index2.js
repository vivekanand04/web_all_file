import express from "express";
const app=express();
const port=3024;

app.get("/",(req,res)=>{             
                                    
     const today=new Date();
     const day=today.getDay();
     let type="aaj class hai";
     let adv="work hard";
      if(day===0||day===6){
        type="aaj chhuti hai";
        adv="take rest";
      }
    res.render("index.ejs",
   {
    dataType:type,
    advice:adv,

    }

    );
});
app.listen(port,()=>{
    console.log(`server running at port ${port}`);
});