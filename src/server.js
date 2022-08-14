import express from "express";
import { MainRouter } from "./route/main.router";

export class Server {
  
  app;

  env;
  port;
  apiVersion;
  appName;

  constructor(port, env, apiVersion, appName) {
    this.app = express();
    this.port = port;
    this.apiVersion = apiVersion;
    this.appName = appName;
    this.env = env;

    // Allows us to return JSON strings
    this.app.use(express.json());

    this.app.get("/", (req, res, next) => {
      res.send("You have reached the express endpoint.");
    });

    this.app.use("/api", MainRouter);
  }

  start() {
    this.app.listen(this.port, () => {
      console.info(`[${this.appName}] API running environment: ${this.env}`);
      console.info(`[${this.appName}] Listening on port: ${this.port}`);
      console.info(
        `[${this.appName}] Running environment version: ${this.apiVersion}`
      );
    });
  }
}
