const {Company} = require("../../../../models")

export default  {
    Mutation: {
         createCompany:async(_,args ) =>{
            const {companyname} = args
            await Company.create({
                 companyname
            })
            return true;   
    }
}
}