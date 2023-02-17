const express = require("express");
const cors = require("cors");

const routes = require("./routes");

const { environment } = require("./config");
const isProduction = environment === "production";
const { ValidationError } = require("sequelize");

const app = express();
app.use(express.json());

// Security Middleware
// enable cors only in development
app.use(cors({ origin: process.env.ORIGIN_URL || "http://localhost:3000" }));

//connect all the routes
app.use(routes);

//Resource Not Found Error-Handler
// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
  const errObj = {
    title: "Resource Not Found",
    errors: ["The requested resource couldn't be found."],
    status: 404,
  };
  next(errObj);
});

//Sequelize Error-Handler
// Process sequelize errors
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = "Validation error";
  }
  next(err);
});

//Error Formatter Error-Handler
// Error formatter
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;
