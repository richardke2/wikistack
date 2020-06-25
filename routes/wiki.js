const express = require('express');
const router = express.Router();
const layout = require("../views/layout");
const addPage = require('../views/addPage')
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

router.post("/", (req, res) => {
    console.log('called');
    // console.log(addPost());
    res.json(req.body)
});



router.get("/add", (req, res) => {
    console.log('called');
    // console.log(addPost());
    res.send(addPage());
});

module.exports = router;
