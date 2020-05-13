import { ProductFamily, FamilyCategory } from "../../../../models";

export default {
  Query: {
    readALLPF: async (_, args) => {
      try {
        return await ProductFamily.findAll({include:[{model:FamilyCategory}]})
      } catch (e) {
        return null;
      }
    },
    readSelectPF:async(_,args) =>{
        const {id} =args;
      try{
        return await ProductFamily.findOne({include:[{model:FamilyCategory}],where:{id}})
      }catch(e){
        return null;
      }
    }
  },
};
