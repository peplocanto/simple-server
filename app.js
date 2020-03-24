const express = require("express");
const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const errorsRouter = require("./routes/errors");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  cors({
    credentials: true
  })
);

app.use("/", indexRouter);
app.use("/api", jsonServer.router("db.json"));
app.use("/errors", errorsRouter);

module.exports = app;
