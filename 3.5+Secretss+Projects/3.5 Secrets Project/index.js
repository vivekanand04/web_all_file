//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3002;

var userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));//bodyparser is a typpe of express so u can use express in place of this

function passwordCheck(req, res, next) {
  const password = req.body["password"];
  if (password === "ILoveProgramming") {
    userIsAuthorised = true;
  }
  next();
}
app.use(passwordCheck);


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");  // res.sendFile will send index.html to the home page .so html me jitna bhi chij jo 
                                                    // screen par display ho sakta hai display hoo jayega
});

app.post("/check", (req, res) => {
  if (userIsAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");// res.sendFile will send secret.html to the home page .so secret.html me jitna bhi chij jo 
    // screen par display ho sakta hai display hoo jayega

  } else {
    res.sendFile(__dirname + "/public/index.html");//or u can use res.redirect("/");in place of this
    
  } 
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
