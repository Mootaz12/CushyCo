import express from "express";
import bodyParser from "body-parser";
const app = express();
app.get("/", function (req, res) {
  res.send("hello from the server");
});
app.listen(8080);
