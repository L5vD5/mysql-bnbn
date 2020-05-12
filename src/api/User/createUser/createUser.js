const {User} = require("../../../../models")

export default  {
    Mutation: {
         createUser:async(_,args ) =>{
            const {email,password,address,username} = args
            console.log(email)
            await User.create({
                email:email,
                password:password,
                address:address,
                username:username
            })
            return true;   
    }
}
}