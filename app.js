const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { render } = require("ejs");
dotenv.config({ path: "vars/.env" });

const Journal = require("./models/journal");

const app = express();

app.set("view engine", "ejs");

const dbURI = process.env.DB_URI;
if (!dbURI) {
  throw new Error("MONGO_URI is not defined in the environment variables");
}

mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

app.use(express.static("src"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/home", (req, res) => {
  res.render("home");
});


app.get("/entry/:date", (req, res) => {
  date = req.params.date.split("-");
  Journal.find({ date: date[0] + "-" + date[1] + "-" + date[2] })
    .then((result) => {
      console.log(result);
      res.render("entry", { journal: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/editEntry/:date", (req, res) => {
  date = req.params.date.split("-");
  Journal.find({ date: date[0] + "-" + date[1] + "-" + date[2] })
    .then((result) => {
      console.log(result);
      res.render("editEntry", { journal: result, date: req.params.date });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/editEntry/:date", (req, res) => {
  const journal = new Journal({
    title: "title",
    details: "details",
    date: "date",
    day: "day",
    sleep: "sleep",
    temp: 1,
    weather: "weather",
  });

  journal
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/calendar", (req, res) => {
  res.render("calendar");
});
