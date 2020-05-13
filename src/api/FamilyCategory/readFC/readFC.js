import { FamilyCategory} from "../../../../models"

export default {
    Query:{
        readAllFC: async() => {
            try{
                return await FamilyCategory.findAll()
            }catch(e){
                return console.log(e)
            }
        },
        readSelectFC: async(_,args) => {
            const {id} = args
           // console.log(await Product.findOne({include:Company,where:{productname}}))
            try{
                return await FamilyCategory.findOne({where:{id}})
             
            }catch(e){
                return console.log(e)
            }
        }
    },

}