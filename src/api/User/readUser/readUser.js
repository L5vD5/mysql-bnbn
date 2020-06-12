import { users } from "../../../../model";

export default {
    Query:{
        readAllUser: async() =>{
            try{
                return await users.findAll();
            }catch(e){
                return console.log(e)
            }
        }
    }
}