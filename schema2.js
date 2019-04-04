const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let Restaurantnew = new Schema({
  "Restaurant ID": {
    type: "Number"
  },
  "Restaurant Name": {
    type: "String"
  },
  Cuisines: {
    type: "String"
  },
  "Average Cost for two": {
    type: "Number"
  },
  Currency: {
    type: "String"
  },
  "Has Table booking": {
    type: "String"
  },
  "Has Online delivery": {
    type: "String"
  },
  "Aggregate rating": {
    type: "Number"
  },
  "Rating color": {
    type: "String"
  },
  "Rating text": {
    type: "String"
  },
  Votes: {
    type: "Number"
  }
});

module.exports = mongoose.model(
  "restaurantNames",
  Restaurantnew,
  "restaurantnames"
);
