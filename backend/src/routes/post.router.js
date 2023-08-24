const express = require("express");
const postRouter = express.Router();

const postController = require("./../controllers/post.controller.js");

postRouter.get("", postController.getPost);
postRouter.post("", postController.createPost);

module.exports = postRouter;
