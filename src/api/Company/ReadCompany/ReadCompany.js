import { Company } from "../../../../models";

export default {
  Query: {
    readAllCompany: async (_, args) => {
      try {
        return await Company.findAll();
      } catch (e) {
        return console.log(e);
      }
    },
    readSelectCompany:async(_,args) =>{
      const {companyname} = args;
      try{
        return await Company.findOne({where:{companyname}})
      }catch(e){
        return console.log(e);
      }
    }
  },
};
