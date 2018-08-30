const express = require("express");
const router = express.Router();
const key = require("../config/credentials/devKey").sendGridKey;
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(key);

router.post("/", function(req, res, next) {
  const { to, from, subject, text, html } = req.body;
  const msg = {
    to,
    from,
    subject,
    text,
    html
  };
  sgMail.send(msg);
});

module.exports = router;
