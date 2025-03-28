//METHOD 1
// import express from "express";
// const app1=express();
 
// app1.listen(3000,()=>{//here 3000 is a port address(means server is running at address 3000)
//     console.log(" its return value hai bro");//call back function (return karne wala funtion )
// })
//IF U HAVE DOUBT THEN READ ARROW FUNCTION FROM REACTS

//METHOD 2
import express from "express";
const app1=express();
const port=30000;
app1.listen(port,()=>{//here 3000 is a port address(means server is running at address 3000)
    console.log(`server is running at address ${port}`);//call back function (return karne wala funtion )
});