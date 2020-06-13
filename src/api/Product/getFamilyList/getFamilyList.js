import { productFamily } from "../../../../model";

export default {
    Query:{
        getFamilyList: async(_,args) =>{
            const {categoryId} = args;
            return await productFamily.findAll({
              where: { categoryId: categoryId },
            });   
        }   
    }
}