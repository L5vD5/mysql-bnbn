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

//DB 정의
db.User = require("./User")(sequelize, Sequelize);
db.Product = require("./Product")(sequelize, Sequelize);
db.Company = require("./Company")(sequelize, Sequelize);
db.Category = require("./Category")(sequelize,Sequelize);
db.Cart = require("./Cart")(sequelize,Sequelize);
db.FamilyCategory = require("./FamilyCategory")(sequelize,Sequelize);
db.ProductFamily = require("./ProductFamily")(sequelize,Sequelize);
db.ProductFamilyUser = require("./ProductFamilyUser")(sequelize,Sequelize);

//Join
    
db.ProductFamilyUser.belongsTo(db.User);
db.ProductFamilyUser.belongsTo(db.ProductFamily,{foreignKey:'ProductFamilyId'});
db.Product.belongsTo(db.FamilyCategory);

db.ProductFamily.belongsTo(db.FamilyCategory);
module.exports = db;