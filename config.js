let settings = {};
var mysql = require("mysql");

const DBConfig = {
  local: {
    port: 3002,
    con: mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "laundry",
      socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    }),
  },
  dev: {
    port: 2007,
    con: mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "laundry",
      socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
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
