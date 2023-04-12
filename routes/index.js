var express = require("express");
var router = express.Router();

const accountSid = "AC04de16f838829ba2a328d52c5e318c99";
const authToken = "2ddc1146838b6d6feb4375bd8e250e53";
const client = require("twilio")(accountSid, authToken);

/* GET home page. */
router.get("/", async function (req, res, next) {
  client.messages
    .create({
      body: "Hello Im John Doe",
      from: "+15076363985",
      // to: "+918789223593",
      to: "+918084475800",
    })
    .then((message) => res.json(message.sid))
    .catch((error)=>{
      console.log(error);
      res.send(error)
    })
    // .done();
});

/* GET send_messages API. */
router.get("/message", function (req, res, next) {
  res.send({ message: "hello from messager route" });
});

module.exports = router;
