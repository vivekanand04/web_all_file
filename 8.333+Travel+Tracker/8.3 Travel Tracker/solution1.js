import express from "express";
import bodyParser from "body-parser";
import pg from "pg";   //postgres is imported from postgres modeule

const app = express();
const port = 3000;

const db = new pg.Client({   //pg.Client: Creates a new client instance
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "Randi@5387",
  port: 5432,
});
db.connect();   //Establishes the connection with PostgreSQL database using the  client instance named db.
      
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// GET home page
app.get("/", async (req, res) => {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];//its syntax of creating array named countries
  result.rows.forEach((country) => {
    countries.push(country.country_code);   
  }); 
// console.log(result);

//   console.log(result.rows);
  res.render("index.ejs", { countries: countries, total: countries.length });
  db.end();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
