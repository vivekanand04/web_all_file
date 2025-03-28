import express from "express";
import bodyparser from "body-parser";
//these three header file uedd to find resources path 
import { dirname } from "path";
import { fileURLToPath } from "url";
// import { log } from "console";
const __dirname = dirname(fileURLToPath(import.meta.url));//by using these three we got resources path

const app = express();
const port = 3001;
app.use(bodyparser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html")//it will print resouces path if u use nodemon index1.js in terminal
  res.sendFile(__dirname + "/public/index.html");/*here we have used sendfile instead of send(used previously) so its require
                                                    path of resources that has to return,  here __dirname + "/public/index.html"
                                                    is file path and index.html is resources that has to return  */
                                                    /*res.sendFile sends the index.html file as the response to the client, 
                                                    effectively serving the HTML page when a user navigates to the root URL.*/
});
app.post("/submit",(req,res)=>{          //post submit se data lekar port(3000)(jaha server run kar raha hai )ko bhejega
  console.log(req.body);                  //bahut sara re data hogs to but yaha hai bodeyparser wala print karana hai
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
