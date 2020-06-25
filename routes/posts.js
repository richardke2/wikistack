const express = require('express');
const router = express.Router();
const layout = require("../views/layout");
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

module.exports = router;