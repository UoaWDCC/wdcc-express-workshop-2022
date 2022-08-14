import { Server } from "./server.js";
import * as packageInfo from '../package.json' assert { type: 'json' };

const port = process.env.PORT || 9000;
const env = process.env.ENV || "DEV";
const appName = packageInfo.name;
const version = packageInfo.version;

const server = new Server(port, env, version, appName);

server.start();