
const express = require("express");

const Message = require("./models/Message");
const router = express.Router();

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-1'});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Call S3 to list the buckets
s3.listBuckets(function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Buckets);
  }
});

let uploadParams = {Bucket: 'earth-space', Key: '', Body: '', ContentType: 'binary'};

const fs = require('fs');
const path = require('path');
const Buffer = require('buffer/').Buffer;  // note: the trailing slash is important!
// const { reduce } = require("core-js/core/array");

console.log("HELLOOOOOO")

const generateFileName = (emailAddr) => {
  console.log("generating FILENAME")
  let fileName = "";
  ind = emailAddr.indexOf("@");
  if (ind !== -1) {
    fileName = emailAddr.slice(0, ind);
  }
  else {
    fileName = emailAddr.slice(0, Math.round(emailAddr.length/3));
  }
  fileName = fileName + Date.now().toString();
  return fileName;
}

router.post("/submitMessage", (req, res) => {
  console.log("what the fuck");
  const buf = req.body.buffer;
  const arr = [];
  let linkToRecording = "";
  let linkToFile = "";
  console.log("we here??");
  if (buf !== null) {
    console.log("HIOI");
    for (i = 0; i < buf.length; i++) {
      arr.push(Buffer.from(Object.values(buf[i])));
    }
    uploadParams.Body = Buffer.concat(arr);
  
    const fileName = generateFileName(req.body.emailAddr);
    uploadParams.Key = path.basename(fileName + '.mp3');
  
    let linkToRecording = "";
    // call S3 to retrieve upload file to specified bucket
    s3.upload (uploadParams, function (err, data) {
      if (err) {
        console.log("Error", err);
        res.send(err);
      } if (data) {
        console.log("Upload Buffer Success");
        linkToRecording = data.Location;
      }
    }
  )}
  if (req.body.file !== "" || req.body.file !== null) {
      console.log("HII");
      const fileName = generateFileName(req.body.emailAddr);
      let uploadParams2 = {Bucket: 'earth-space', Key: path.basename(fileName + '.mp3'), Body: req.body.file};
      s3.upload(uploadParams2, function (err, data) {
        if (err) {
          console.log("whatup")
          console.log("Error", err);
          res.send(err);
        } if (data) {
          console.log("Upload File Success");
          linkToFile = data.Location;
        }
      }
  )}
  const newMessage = new Message({
    legalName: req.body.legalName,
    emailAddr: req.body.emailAddr,
    country: req.body.country,
    region: req.body.region,
    message: req.body.message,
    translation: req.body.translation,
    language: req.body.language,
    recordingLink: linkToRecording,
    fileLink: linkToFile,
  });
  newMessage.save().then(() => res.send(newMessage));
  
  
})


router.get("/allSubmissions", (req, res) => {
  Message.find({}).then((messages) => {
    res.send(messages);
  })
})


router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
