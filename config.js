let settings = {};
var mysql = require("mysql");

const DBConfig = {
  local: {
    port: 11220,
    con: mysql.createConnection({
      host: "us-cdbr-east-02.cleardb.com",
      port: "3306",
      user: "b55e4af43a550b",
      password: "ece628bd",
      database: "heroku_8d896fe10b8bfd4",
    }),
  },
  dev: {
    port: 11221,
    con: mysql.createConnection({
      host: "us-cdbr-east-02.cleardb.com",
      port: "3306",
      user: "b55e4af43a550b",
      password: "ece628bd",
      database: "heroku_8d896fe10b8bfd4",
    }),
  },
};

switch (process.env.NODE_ENV) {
  case "dev":
    let dev = DBConfig.dev.con;
    DBConfig.dev.URI = dev.connect(function (err) {
      if (err) throw err;
      console.log("DB Successfully Connected");
    });
    settings = DBConfig.dev;
    break;

  default:
    let local = DBConfig.local.con;
    DBConfig.local.URI = local.connect(function (err) {
      if (err) throw err;
      console.log("DB Successfully Connected");
    });
    settings = DBConfig.local;
    break;
}

module.exports = settings;
