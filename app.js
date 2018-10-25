import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes/index";
import {sequelize} from "./configs";
import createError from "http-errors";

let app;
app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

sequelize.authenticate().then(() => {
  console.log("connection has been established successfully")
}).catch(err => {
  createError(404);
  console.error("Unable to Connect To the database", err);
});

app.use('/', indexRouter);

//Handle Error
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.json(err);
});
module.exports = app;
