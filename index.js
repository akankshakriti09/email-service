const express = require("express");
const app = express();
const port = process.env.PORT || 3600;
const mongoose = require("mongoose");
const MongoURI =
  "mongodb://localhost:27017/xyz-ind?readPreference=primary&directConnection=true&tls=false";
const cors = require("cors");
const Subscriber = require("./schema"); // Adjust the path accordingly

mongoose
  .connect(MongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database ...."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use(express.json());
app.use(cors());

app.post("/add-subscriber", (req, res) => {
  const { email } = req.body;
  console.log(email);
  const subscriber = new Subscriber({
    email,
  });

  subscriber
    .save()
    .then((result) => {
      res.status(200).json({ subscriber: result, message: "Email subscribed succesfully" });
    })
    .catch((err) => {
      
      console.log(err);
    });
  // return req.body
});
app.listen(port, () => {
  console.log("Server is running");
});
