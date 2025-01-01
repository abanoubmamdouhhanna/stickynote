import * as dotenv from 'dotenv'
dotenv.config({path:'./config/.env'})

import express from "express";
import initApp from "./src/app.router.js";
const app = express();
const port = process.env.port||5000;

initApp(app, express);
app.listen(port, () =>
  console.log(`stickyNote app listening on port ${port}!`)
);
