import * as express from "express";
import * as mongoose from "mongoose";
import { getEnvironmentVariables } from "./environments/env";
import userRouter from "./routers/userRouter";
import bodyParser = require("body-parser");

export class Server {
  public app: express.Application = express();

  constructor() {
    this.setConfigurations();
    this.setRoutes();
    this.error404Handler();
    this.handleErrors();
  }

  setConfigurations() {
    this.connectMongodb();
    this.configureBodyParser();
  }

  connectMongodb() {
    mongoose.set("strictQuery", true);
    mongoose
      .connect(getEnvironmentVariables().db_url)
      .then(() => {
        console.log("MongoDB is connected...");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  configureBodyParser() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  setRoutes() {
    this.app.use("/api/user", userRouter);
  }

  error404Handler() {
    this.app.use((req, res) => {
      res.status(404).json({
        message: "Not Found",
        status_code: 404,
      });
    });
  }

  handleErrors() {
    this.app.use((error, req, res, next) => {
      const errorStatus = req.errorStatus || 500;
      res.status(errorStatus).json({
        message: error.message || "Someting went wrong, please try again",
        status_code: errorStatus,
      });
    });
  }
}
