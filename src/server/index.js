const dotenv = require("dotenv");
dotenv.config();

var AYLIENTextAPI = require("aylien_textapi");
var textapi = new AYLIENTextAPI({
  application_id: "e73d40b4",
  application_key: "09ce8375cf8488e2bc2bc9bf994ae1f0"
});

console.log(`Your API key is ${process.env.API_KEY}`);
