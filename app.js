const express = require("express");
const app = express();
var cors = require("cors");
const axios = require("axios");
const con = require("./database");
const mongoose = require("mongoose");
let restaurants = require("./schema");
let RestaurantNames = require("./schema2");

// let restname, restloc;
// restaurantsArr.forEach(element => {
//   restname = new RestaurantNames(element);
//   restname.save().catch(err => {
//     console.error(err);
//   });
// });
// restaurantArr.forEach(element => {
//   restloc = new Restaurants(element);
//   restloc.save().catch(err => {
//     console.error(err);
//   });
// });
app.use(cors());
let locdata, restgot;
app.get("/api/restaurantLocation", async (reqst, res) => {
  let query = restaurants.find({}, null);
  let promise = await query.exec((err, data) => {
    console.log(err);
    locdata = data;
    return res.send(locdata);
  });
});

app.get("/api/restaurants", async (req, response) => {
  let secondQuery = RestaurantNames.find({}, null);
  let prom = await secondQuery.exec((errlog, datalog) => {
    console.log(errlog);
    restgot = datalog;

    return response.send(restgot);
  });
});

app.listen(4000, () => console.log("server strted"));
