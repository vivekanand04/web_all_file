import express from "express";
import morgan from "morgan";

const app = express();
const port = 3004;
//here morgan is used to logging the resoures
app.use(morgan("tiny"));//here we can also write  other morgan format like combined
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
