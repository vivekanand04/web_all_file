import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");  //yha pe hamne sirf index.ejs ko triggerSed kiya hai kuch bheja nahi hai isme
});
 
app.post("/submit", (req, res) => {
  const countName=req.body["fName"].length+req.body["lName"].length;
  console.log(countName);
  res.render("index.ejs",{
    count:countName,                      
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
