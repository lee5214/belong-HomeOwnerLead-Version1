if (process.env.NODE_ENV === "production") {
  module.exports = require("./prodKey.js");
} else if (process.env.NODE_ENV === "ci") {
  module.exports = require("./ciKey.js");
} else {
  module.exports = require("./devKey.js");
}
