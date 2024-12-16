const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { render } = require("ejs");
dotenv.config({ path: "vars/.env" });

const Journal = require("./models/journal");
const Sleep = require("./models/sleep");

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
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  Sleep.find()
    .sort({ day: -1 })
    .then((result) => {
      Journal.find()
        .then((result2) => {
          console.log(result2.length);
          res.render("home", { sleep: result, journal: result2 });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
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

app.post("/editEntry/:date", async (req, res) => {
  date = req.params.date.split("-");
  datee = date[0] + "-" + date[1] + "-" + date[2];

  const journal = new Journal({
    title: req.body.title,
    details: req.body.body,
    date: datee,
    day: date[3],
    sleep: req.body.hour + "h" + " " + req.body.minute + "m",
    temp: 29,
    weather: "Mostly Clear",
  });

  const result = await Journal.updateOne(
    { date: datee },
    {
      title: req.body.title,
      details: req.body.body,
      date: datee,
      day: date[3],
      sleep: req.body.hour + "h" + " " + req.body.minute + "m",
      temp: 29,
      weather: "Mostly Clear",
    }
  );

  const sleep = new Sleep({
    hour: parseInt(req.body.hour) + parseFloat(req.body.minute / 60),
    date: date[0] + "-" + date[1],
    day: date[1],
  });

  console.log("Update Result:", result);

  if (result.matchedCount === 0) {
    console.log("No matching document found to update.");
    journal
      .save()
      .then((result) => {
        sleep
          .save()
          .then((result) => {
            res.redirect("/entry/" + req.params.date);
          })
          .catch((err) => {
            console.log(err);
          });
        res.redirect("/entry/" + req.params.date);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    const result2 = await Sleep.updateOne(
      { date: date[0] + "-" + date[1] },
      {
        hour: parseInt(req.body.hour) + parseFloat(req.body.minute / 60),
        date: date[0] + "-" + date[1],
        day: date[1],
      }
    );

    console.log("Update Result:", result2);

    if (result2.matchedCount === 0) {
      console.log("No matching document found to update.");
      sleep
        .save()
        .then((result) => {
          res.redirect("/entry/" + req.params.date);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("Document updated successfully.");
      res.redirect("/entry/" + req.params.date);
    }
  }

  // sleep
  //   .save()
  //   .then((result) => {
  //     res.redirect("/entry/" + req.params.date);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
});

app.get("/calendar", (req, res) => {
  res.render("calendar");
});
