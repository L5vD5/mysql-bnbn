import { ProductFamily, ProductFamilyUser, User } from "../../../../models";

export default {
  Query: {
    readAllPFU: async (_, args) => {
      try {
        return await ProductFamilyUser.findAll({include:[{model:User,required:"false"},{model:ProductFamily}]})
      } catch (e) {
        return null;
      }
    },
    readSelectPFU:async(_,args) =>{
        const {id} =args;
      try{
        return await ProductFamilyUser.findOne({include:[{model:ProductFamily},{model:User}],where:{id}})
      }catch(e){
        return null;
      }
    }
  },
};
