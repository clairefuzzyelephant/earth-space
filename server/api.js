
const express = require("express");

const Message = require("./models/Message");
const RegionCount = require("./models/RegionCount");
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



const path = require('path');

const multer  = require('multer') //use multer to upload blob data
const upload = multer().single("soundBlob"); // set multer to be the upload variable (just like express, see above ( include it, then use it/set it up))

const generateFileName = (size) => {
  console.log("generating FILENAME")
  let fileName = "";
  fileName = size.toString() + "_" +  Date.now().toString();
  return fileName;
}


let uploadParams = {Bucket: 'earth-space', Key: '', Body: '', ContentType: 'binary'};

router.post('/uploadAudio', (req, res) => {
  upload(req, res, function(errr) {
    uploadParams.Body = req.file.buffer;
    let fname = generateFileName(req.file.size);
    uploadParams.Key = path.basename(fname + ".webm");
    s3.upload (uploadParams, function (err, data) {
      if (err) {
        console.log("Error Uploading to S3: " + err);
        res.send(null);
      } if (data) {
        console.log("Uploaded to S3: " + data.Location);
        res.status(200).send(data.Location);
      }
    })
    if (errr) {
      res.send(errr);
    }
  })
})

router.post("/submitMessage", (req, res) => {
  const newMessage = new Message({
    legalName: req.body.legalName,
    emailAddr: req.body.emailAddr,
    country: req.body.country,
    region: req.body.region,
    message: req.body.message,
    language: req.body.language,
    recordingLink: req.body.linkToRecording,
  });
  newMessage.save().then(() => 
      RegionCount.updateOne(
          { regionName: req.body.region },
          { $inc: {count: 1 }}
      ).then(() => {
          res.send(newMessage)
      })
    )
})


router.get("/allSubmissions", (req, res) => {
  Message.find({}).then((messages) => {
    res.send(messages);
  })
})

router.get("/regionCounts", (req, res) => {
  regionCountDict = {"NA": 0, "SA": 0, "AF": 0, "EU": 0, "AS": 0, "OC": 0};
  RegionCount.find({}).then((regionCounts) => {
    for (i = 0; i < regionCounts.length; i++) {
      let curRegion = regionCounts[i].regionName;
      regionCountDict[curRegion] = regionCounts[i].count;
    }
    res.send(regionCountDict);
  })
})


router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
