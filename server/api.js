
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
const Buffer = require('buffer/').Buffer  // note: the trailing slash is important!


const generateFileName = (emailAddr) => {
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
  const buf = req.body.buffer;
  const arr = [];

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
      console.log("Upload Success");
      linkToRecording = data.Location;
      const newMessage = new Message({
        legalName: req.body.legalName,
        englishName: req.body.englishName,
        emailAddr: req.body.emailAddr,
        country: req.body.country,
        missEarth: req.body.missEarth,
        message: req.body.message,
        translation: req.body.translation,
        language: req.body.language,
        recordingLink: linkToRecording,
      });
      newMessage.save().then(() => res.send(newMessage));
    }
  });
  
})

// router.post("/submitRecording", (req, res) => {
//   const buf = req.body.buffer;
//   const arr = [];

//   for (i = 0; i < buf.length; i++) {
//     arr.push(Buffer.from(Object.values(buf[i])));
//   }
//   // fs.writeFileSync('test.mp3', Buffer.concat(arr), 'binary');
//   // let fileStream = fs.createReadStream('test.mp3');
//   // fileStream.on('error', function(err) {
//   //   console.log('File Error', err);
//   // });
//   uploadParams.Body = Buffer.concat(arr);
//   uploadParams.Key = path.basename('hum.mp3');

//   let linkToRecording = "";
//   // call S3 to retrieve upload file to specified bucket
//   s3.upload (uploadParams, function (err, data) {
//     if (err) {
//       console.log("Error", err);
//       res.send(err);
//     } if (data) {
//       console.log("Upload Success");
//       linkToRecording = data.Location;
//       const newRecording = new Recording({
//         fileLink: linkToRecording,
//       });
//       newRecording.save().then(() => res.send(newRecording));
//     }
//   });
// })


router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
