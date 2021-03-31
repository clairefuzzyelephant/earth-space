
const express = require("express");

const Message = require("./models/Message");
const Recording = require("./models/Recording");

const router = express.Router();

router.post("/submitMessage", (req, res) => {
  const newMessage = new Message({
    legalName: req.body.legalName,
    englishName: req.body.englishName,
    country: req.body.country,
    message: req.body.message
  });
  newMessage.save().then(() => res.send(newMessage));
})

router.post("/submitRecording", (req, res) => {
  const newRecording = new Recording({
    file: req.body.buffer,
  });
  newRecording.save().then(() => res.send(newRecording));
})


router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;