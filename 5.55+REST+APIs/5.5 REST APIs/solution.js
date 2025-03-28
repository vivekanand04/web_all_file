import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
 
const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//Add your own bearer token from the previous lesson.
const yourBearerToken = "430fd4fb-0a84-4f6e-afa1-13148554e492";
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));
 
app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
}); 

app.post("/get-secret", async (req, res) => {/*ye get-secret method hai isame sirf id ki jarurat padta hai..for sure 
  go to documentation...for run this fill id and click get button*/
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/post-secret", async (req, res) => {/*after seeing documentation we concluded that we need serets and score  
  so for run this fill this both after hit post button*/
  try {
    const result = await axios.post(API_URL + "/secrets", req.body, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/put-secret", async (req, res) => {/*ye put-secret method hai isame sirf id ki jarurat padta hai..for sure 
  go to documentation...for run this fill id and click put button*/
  const searchId = req.body.id;
  try {
    const result = await axios.put(
      API_URL + "/secrets/" + searchId,
      req.body,
      config
    ); 
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.patch(
      API_URL + "/secrets/" + searchId,
      req.body,
      config
    );
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.delete(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
