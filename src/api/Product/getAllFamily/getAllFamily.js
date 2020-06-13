import { productFamily } from "../../../../model";

export default {
    Query:{
        getAllFamily: async(_,args) =>{
            const {category} = args;
             try{
                return await productFamily.findAll({where:{category}});
            }catch(e){
                return console.log(e)
            }
        }
    }
}