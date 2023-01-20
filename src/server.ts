import * as express from "express";
import * as mongoose from "mongoose";
import { getEnvironmentVariables } from "./environments/env";
import userRouter from "./routers/userRouter";

export class Server {
  public app: express.Application = express();

  constructor() {
    this.setConfigurations();
    this.setRoutes();
  }

  setConfigurations() {
    this.setMongodb();
  }

  setMongodb() {
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

  setRoutes() {
    this.app.use("/api/user", userRouter);
  }
}
