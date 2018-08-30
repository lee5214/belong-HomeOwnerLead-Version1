const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
  const ip = (
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress
  ).split(",")[0];
  res.send(ip);
});

module.exports = router;
