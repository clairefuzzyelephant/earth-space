
const express = require("express");

const Message = require("./models/Message");
const Recording = require("./models/Recording");

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
const Buffer = require('buffer/').Buffer  // note: the trailing slash is important!
const toBuffer = require('typedarray-to-buffer')

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
  // console.log(req.body.buffer);
  // const buf = toBuffer(req.body.buffer);
  const buf = req.body.buffer;
  const blob = req.body.blob;
  // console.log(blob);
  // console.log(new Uint8Array([buf]));
  // console.log(buf);
  // console.log(typeof(buf));
  // console.log("whatUP!");
  const arr = [];

  for (i = 0; i < buf.length; i++) {
    console.log(buf[i]);
    console.log(Object.values(buf[i]));
    console.log('UUWUUUUUU--------------\n\n\n')
    arr.push(Buffer.from(Object.values(buf[i])));
  }

  console.log(arr);

  fs.writeFileSync('test.mp3', Buffer.concat(arr), 'binary');

  let fileStream = fs.createReadStream('test.mp3');
  fileStream.on('error', function(err) {
    console.log('File Error', err);
  });
  uploadParams.Body = Buffer.concat(arr);
  uploadParams.Key = path.basename('what.mp3');


  let linkToRecording = "";
  // call S3 to retrieve upload file to specified bucket
  s3.upload (uploadParams, function (err, data) {
    if (err) {
      console.log("Error", err);
      res.send(err);
    } if (data) {
      console.log("Upload Success", data.Location);
      linkToRecording = data.Location;
      const newRecording = new Recording({
        fileLink: linkToRecording,
      });
      newRecording.save().then(() => res.send(newRecording));
    }
  });
  
})


router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
