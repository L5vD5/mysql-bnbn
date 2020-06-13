import { familyCategory } from "../../../../model"


export default{
    Query:{
        getFamilyCategory: async(_,args) => {
           return await familyCategory.findAll();
        }
    }
}