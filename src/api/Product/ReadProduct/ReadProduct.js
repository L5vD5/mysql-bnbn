import { Product, Company , Category } from "../../../../models"

export default {
    Query:{
        readProduct: async() => {
            try{
                return await Product.findAll({include:[{model:Company},{model:Category}]})
            }catch(e){
                return console.log(e)
            }
        },
        selectProduct: async(_,args) => {
            const {id,productname} = args
           // console.log(await Product.findOne({include:Company,where:{productname}}))
            try{
             const join = await Product.findOne({include:[{model:Company},{model:Category}],where:{productname}})
                return join
            }catch(e){
                return console.log(e)
            }
        }
    },

}