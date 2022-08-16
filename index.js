import express from "express";
import { Server } from "./server.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;

const server = new Server({
  port: port,
  name: "TestApp",
  version: "1.0.0"
})

server.start();