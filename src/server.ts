import dotenv from "dotenv"
dotenv.config()

import express from "express";
import morgan from "morgan"
import cors from "cors"
import path from "path"

import { register } from "./api/generated";
import box from "./service/box";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(morgan('dev'))
app.use(cors())

app.use(express.static(path.resolve(__dirname, '../client/build')));

register(app, { box })

app.get('*', (req, res, next) => {
  if (req.originalUrl.startsWith('/api')) {
    next()
  } else {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  }
})

app.listen(PORT)
console.log(`Listening on port ${PORT}...`)
