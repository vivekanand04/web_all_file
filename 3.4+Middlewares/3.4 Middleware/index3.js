import express from "express";

const app = express();
const port = 3002;


//step1:  creating our own middleware named vivekanand
function vivekanand(req,res,next)
{
  console.log(" i am req.method",req.method); //this will print the request data(method type) 
  next();//ye control ko next middleware me bhejega agar ek hi middleware hai to next conrol ko  server ko bhejega
};
//step2: now using that created vivekanand middleware
app.use(vivekanand);


app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
