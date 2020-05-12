import { Product } from "../../../../models"

export default {
    Query:{
        readProduct: async() => {
            try{
                return await Product.findAll()
            }catch(e){
                return console.log(e)
            }
        },
        selectProduct: async(_,args) => {
            const {id,productname} = args
            console.log(args)
            try{
                return await Product.findOne({where:{productname,id}})
            }catch(e){
                return console.log(e)
            }
        }
    },

}