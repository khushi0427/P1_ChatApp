

import express from "express";
const Router = express.Router();

Router.get("/message", (req, res) => {
  res.send("Get all messages");
});

export default Router;
