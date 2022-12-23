import express from "express";
import { asyncGetRestaurants, getRestaurant } from "./api/restaurants.js";

//const express = require("express");
//const ejs = require("ejs");
const app = express();

/* const restaurant = [
  {
    name: "Kabana Pizza",
    adresse: "Le Lamentin",
  },
  {
    name: "Casa Pizza",
    adresse: "Schoelcher",
  },
  {
    name: "Pizza Aldo",
    adresse: "Ducos",
  },
]; */

app.set("view engine", "ejs");
app.use(express.static("public"));

const port = 3000;

app.get("/", async (req, res) => {
  const resp = await asyncGetRestaurants();
  for (let index = 0; index < resp.length; index++) {
    console.log(resp[index].attributes.address);
  }
  res.render("home.ejs", { title: "Accueil", list: resp });
});

app.get("/restaurant", async (req, res) => {
  const data = await getRestaurant(req.query.id);
  console.log(data);
  res.render("restaurant.ejs", { data: data });
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
