const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');
const {generateSlug} = require('../app');

const Page = db.define('page', {
    title: {
      type: Sequelize.STRING,
      allowNull : false
    },
    slug: {
      type: Sequelize.STRING,
      allowNull : false

    

    },
    content: {
      type: Sequelize.TEXT,
      allowNull : false

    },
    status: {
      type: Sequelize.ENUM('open', 'closed')
    }
  },{
    hooks: {
      beforeValidate: function(page){
        page.slug = page.title.replace(/\s+/g, '_').replace(/\W/g, '');
      }
    
  }
});

  const User = db.define('user', {
    name: {
      type: Sequelize.STRING,
      allowNull : false

    },
    email: {
      type: Sequelize.STRING,
      allowNull : false,
      validate: {
        isEmail: true,
      }
    }
  });

  module.exports = { Page, User, db};

// module.exports = {
//   db
// }
