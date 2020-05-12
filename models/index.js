const Sequelize = require('sequelize');
const db ={};

const sequelize = new Sequelize(
    'bnbn', // 데이터베이스 이름
    'root', // 유저 명
    'bjwkor', // 비밀번호
    {
      'host': 'localhost', // 데이터베이스 호스트
      'dialect': 'mysql' // 사용할 데이터베이스 종류
    }
  );


db.sequelize = sequelize
db.Sequelize = Sequelize

//User
db.User = require("./User")(sequelize, Sequelize);
//Product
db.Product = require("./Product")(sequelize, Sequelize);

//Company
db.Company = require("./Company")(sequelize, Sequelize);

module.exports = db;