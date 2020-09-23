var jwt = require("jsonwebtoken");
var db = require("../db");
const dotenv = require("dotenv");
dotenv.config();
function verifyToken(req, res, next) {
  var token = req.headers["x-access-token"];
  if (!token)
    return res.status(403).send({ auth: false, message: "No token provided." });

  jwt.verify(token, "TOKENSECRETFORADMIN", function(err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });

    // if everything good, save to request for use in other routes
    req.userId = decoded.id;
    req.decoded = decoded;
    next();
  });
}
module.exports = verifyToken;
