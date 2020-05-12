import { User } from "../../../../models"

export default {
    Query:{
        readAllUser: async() =>{
            try{
                return await User.findAll();
            }catch(e){
                return console.log(e)
            }
        },
        readSelectUser:async(_,args) => {
            const {email} = args
            try{
                return await User.findOne({where:{email}})
            }catch(e){
                return console.log(e)
            }   
        }
    }
}