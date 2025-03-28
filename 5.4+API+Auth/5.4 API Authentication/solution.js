import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// TODO: Replace the values below with your own before running this file.
const yourUsername = "100vivek";
const yourPassword = "Vivekanand@5387";
const yourAPIKey = "75c05fdc-f386-40fe-a0cb-fabfc5e62a81";
const yourBearerToken = "0de5981a-84d5-4697-b8f3-e3b1bd0d8008";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
}); 

app.get("/noAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/random");
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const result = await axios.get(
      API_URL + "/all?page=2",          //The endpoint /all?page=2 is added to the base URL, meaning you are requesting the "all" resource and specifying page=2, which typically means you are requesting the second page of results.
      
      { 
        auth: {
          username: yourUsername,
          password: yourPassword,
        },                                  //auth is a key that contains an object with username and password. These are the credentials required to access the API.
      }
    );
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/filter", {  
      params: {   //The params object in the axios.get method is used to specify query parameters for the API request.
        score: 5,  //ye nahi likhane par bhi chalega]
        apiKey: yourAPIKey,  //  score: 5 filters the results by a score of 5, and apiKey: yourAPIKey is used to authenticate the request.
                            
                     
      },
    });
    //the final URL will be:https://example.com/api/filter?score=5&apiKey=yourAPIKey
    //both score=5 and apiKey=yourAPIKey are query parameters.
    res.render("index.ejs", { content: JSON.stringify(result.data) });  
  } catch (error) {
    res.status(404).send(error.message);
  }
});
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.get("/bearerToken", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/secrets/2", config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
