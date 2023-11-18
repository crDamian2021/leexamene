const express = require("express");
const hbs = require("hbs");
const cors = require("cors");
const path = require("path");

class Server {
  constructor() {
    this.app = express();
    this.port = port.env.PORT;
    this.middleware();
    this.routers();
  }

  middleware() {}
}
