const Sequelize = require('sequelize');
const db ={};

const sequelize = new Sequelize(
    'en', // 데이터베이스 이름
    'l5vd5', // 유저 명
    'dbsqud23', // 비밀번호
    {
      'host': '211.62.225.216', // 데이터베이스 호스트
      'dialect': 'mysql' // 사용할 데이터베이스 종류
    }
  );


db.sequelize = sequelize
db.Sequelize = Sequelize

//DB 정의
db.User = require("./users")(sequelize, Sequelize);

//Join
    
module.exports = db;