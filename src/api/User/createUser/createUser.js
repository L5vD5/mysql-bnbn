import { users } from "../../../../model";

export default {
    Query:{
        readAllUser: async(_,args) =>{
            console.log(args);
            try{
                return await users.create({
                    email
                    
                });
            }catch(e){
                return console.log(e)
            }
        }
    }
}