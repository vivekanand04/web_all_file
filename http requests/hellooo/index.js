import express from "express";
const vivek=express();
const port=3006;

vivek.get("/",(req,res)=>               //here get is a express function and "/" represent the homepage(root) 
 {
console.log(req);/*it will print list of all request in terminal made by client computer to resources from server...it will only 
                   print if localhost:3000 is running on chrome*/
 console.log(req.rawHeaders);    /*a key value pair comes fom where request generated .....it will print list of all request in terminal made by client computer to resources from server...it will only 
                                print if localhost:3000 is running on chrome  */        
  res.send(`it is  response and returned data from ${port}`);//it is returned resources
//    res.send("<h1>hello </h1>");//we can write html also
})  



vivek.listen(port,()=>
{
    console.log(`server is running at ${port}`);
})