import { Category } from "../../../../models";

export default {
  Query: {
    readAllCategory: async (_, args) => {
      try {
        return await Category.findAll();
      } catch (e) {
        return console.log(e);
      }
    },
    readSelectCategory:async(_,args) =>{
      const {categoryname} = args;
      try{
        return await Category.findOne({where:{categoryname}})
      }catch(e){
        return console.log(e);
      }
    }
  },
};
