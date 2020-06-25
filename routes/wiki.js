const express = require('express');
const router = express.Router();
const layout = require("../views/layout");
const addPage = require('../views/addPage');
const {Page} = require('../models/index');
//const {generateSlug} = require('../app');
// could use one line instead: const router = require('express').Router();
//const client = require("../db");
// const postList = require("../views/postList");
// const postDetails = require("../views/postDetails");
// const addPost = require('../views/addPost');

router.get("/", (req, res) => {
    console.log('called');
    // console.log(addPost());
    res.send(layout());
});

router.post("/", async (req, res, next) => {
    // console.log('called');
    // // console.log(addPost());
    // res.json(req.body)
    const page = new Page({
        title: req.body.title,
        content: req.body.content
      });
      console.log(page);
      try {
        await page.save();
        res.redirect('/');
      } catch (error) { next(error) }
});



router.get("/add", (req, res) => {
    console.log('called');
    // console.log(addPost());
    res.send(addPage());
});

function generateSlug (title) {
    // Removes all non-alphanumeric characters from title
    // And make whitespace underscore
    return title.replace(/\s+/g, '_').replace(/\W/g, '');
  }

module.exports = router;
