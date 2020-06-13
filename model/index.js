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
db.users = require("./users")(sequelize, Sequelize);
db.product = require("./product")(sequelize, Sequelize);
db.productFamily= require("./productFamily")(sequelize, Sequelize);
db.productFamily_user= require("./productFamily_user")(sequelize, Sequelize);
db.familyCategory = require("./familyCategory")(sequelize, Sequelize);
//Join
db.productFamily.belongsTo(db.familyCategory,{foreignKey:"category"});
db.productFamily.hasMany(db.productFamily_user,{foreignKey:"family_id"});
db.familyCategory.hasMany(db.productFamily,{foreignKey:"category"})
db.productFamily_user.belongsTo(db.productFamily,{foreignKey:"family_id"});
db.productFamily_user.belongsTo(db.users,{foreignKey:"user_id"});

module.exports = db;