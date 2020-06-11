import { Product, Company , Category, FamilyCategory } from "../../../../models"

export default {
    Query:{
        readProduct: async() => {
            try{
                return await Product.findAll({include:[{model:FamilyCategory}],required:"false"})
            }catch(e){
                return console.log(e)
            }
        },
        selectProduct: async(_,args) => {
            const {id,productname} = args
           // console.log(await Product.findOne({include:Company,where:{productname}}))
            try{
             const join = await Product.findOne({include:[{model:FamilyCategory}],where:{id}})
                return join
            }catch(e){
                return console.log(e)
            }
        },
        searchProduct: async(_,args) => {
            const {id,productname} = args
            console.log(args,"!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
           // console.log(await Product.findOne({include:Company,where:{productname}}))
            try{
             const join = await Product.findOne({include:[{model:FamilyCategory}],where:{productname}})
                return join
            }catch(e){
                return console.log(e)
            }
        },
    },

}