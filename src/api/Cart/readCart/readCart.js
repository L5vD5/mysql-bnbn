import { Cart, Product, User } from "../../../../models";

export default {
  Query: {
    readAllCart: async (_, args) => {
      try {
        return await Cart.findAll();
      } catch (e) {
        return console.log(e);
      }
    },
    readSelectCart:async(_,args) =>{
      const {id} = args;
      try{
        const join = Cart.findOne({include:[{model:Product},{model:User}],where:{id}})
        return await join
      }catch(e){
        return console.log(e);
      }
    }
  },
};
