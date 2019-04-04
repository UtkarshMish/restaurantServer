const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let restaurants = new Schema({
  "Restaurant ID": {
    type: "Number"
  },
  "Country Code": {
    type: "Number"
  },
  City: {
    type: "String"
  },
  Address: {
    type: "String"
  },
  Locality: {
    type: "String"
  },
  "Locality Verbose": {
    type: "String"
  },
  Longitude: {
    type: "Number"
  },
  Latitude: {
    type: "Number"
  }
});

module.exports = mongoose.model("restaurants", restaurants, "restaurants");
