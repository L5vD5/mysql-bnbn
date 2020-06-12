import { User } from "../../../../models"

export default {
    Query:{
        readAllUser: async() =>{
            try{
                return await User.findAll();
            }catch(e){
                return console.log(e)
            }
        }
    }
}