const {Cart} = require("../../../../models")

export default  {
    Mutation: {
         createCart:async(_,args ) =>{
            const {userId,productId,quantity} = args
            await Cart.create({
                userId,productId,quantity
            })
            return true;   
    }
}
}