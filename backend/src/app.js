const express = require("express");
const path = require("path");
require("dotenv").config();

const cors = require("cors");

// let's create express app

const app = express();

// use some application-level middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// load router

const booksRouter = require("./routes/booksRouter");
const usersRouter = require("./routes/usersRouter");

app.use("/books/", booksRouter);
app.use("/users/", usersRouter);

// ready to export
module.exports = app;
