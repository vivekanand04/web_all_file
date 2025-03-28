import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3001;

const db = new pg.Client({ 
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Randi@5387",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

   async function checkVisited() {  //this function will add country into table to color
  const result = await db.query("SELECT country_code FROM visited_countries");

  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

// GET home page
app.get("/", async (req, res) => {
  const countries = await checkVisited();
  res.render("index.ejs", { countries: countries, total: countries.length });
});

//INSERT new country
app.post("/add", async (req, res) => {
   const input = req.body["country"];
  
 
  const result = await db.query(
    "SELECT country_code FROM countries WHERE country_name = $1",
    [input]
  );
 // here result will be like this javascript object format
  // const result = {
  //   rows: [
  //     {
  //       country_code: "US"
  //     }
  //   ],
  //   // Other metadata about the query execution (not usually needed)
  // };

  if (result.rows.length !== 0) {

    const data = result.rows[0];
    const countryCode = data.country_code;
//or  const countryCode = result.rows[0].country_code;

    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [
      countryCode
    ]);
    res.redirect("/");   //it redirect to home page
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
