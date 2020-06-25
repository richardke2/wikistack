const express = require("express");
const morgan = require("morgan");
//const client = require("./db");
// const postList = require("./views/postList");
// const postDetails = require("./views/postDetails");
const views = require("./views");
const wikiRoutes = require('./routes/wiki');
const userRoutes = require('./routes/user')
const path = require("path");
// const { db } = require('./models');
const models = require('./models');


const app = express();
// parses url-encoded bodies
app.use(express.urlencoded({ extended: false }));

// // parses json bodies
app.use(express.json());

const init = async () => {
  await models.db.sync();

  const PORT = 1338;

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });

};

init();

app.use(morgan("dev"));
// app.use(express.static(__dirname + "/stylesheets"));
app.use(express.static(path.join(__dirname,"/stylesheets")));

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })

app.use('/wiki', wikiRoutes);

app.get("/", (req, res) => {
  res.redirect("/wiki");
})

// const PORT = 1338;

// app.listen(PORT, () => {
//   console.log(`App listening in port ${PORT}`);
// });
