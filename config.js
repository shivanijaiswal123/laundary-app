let settings = {};
var mysql = require("mysql");

const DBConfig = {
  local: {
    port: 33061,
    con: mysql.createConnection({
      host: "127.0.0.1",
      port: "3306",
      user: "root",
      password: "root",
      database: "laundry",
    }),
  },
  dev: {
    port: 33062,
    con: mysql.createConnection({
      host: "127.0.0.1",
      port: "3306",
      user: "root",
      password: "root",
      database: "laundry",
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
