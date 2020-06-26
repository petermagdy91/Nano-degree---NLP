const dotenv = require("dotenv");
dotenv.config();
var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = "2711";

//initialize Aylien
var AYLIENTextAPI = require("aylien_textapi");
var textapi = new AYLIENTextAPI({
  application_id: `${process.env.API_ID}`,
  application_key: `${process.env.API_KEY}`
});

// Start up an instance of app
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static("dist"));

// Setup Server
app.listen(port, function() {
  console.log(`server is running on port: ${port}!`);
});

app.get("/", function(req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});

app.post("/all", (req, res) => {
  textapi.sentiment(
    {
      url: req.body.url
    },
    function(error, response) {
      if (error === null) {
        res.send(response);
      }
    }
  );
});
