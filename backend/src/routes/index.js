const express = require("express");
const postRouter = require("./post.router.js");

const routes = express.Router();
routes.use("/post", postRouter); // ***

module.exports = routes;
