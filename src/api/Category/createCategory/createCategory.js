const {Category} = require("../../../../models")

export default  {
    Mutation: {
         createCategory:async(_,args ) =>{
            const {categoryname} = args
            await Category.create({
                categoryname
            })
            return true;   
    }
}
}