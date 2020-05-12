const { Product } = require("../../../../models");
const  {Company}  = require("../../../../models");

export default {
  Mutation: {
    createProduct: async (_, args) => {
      const {
        category,
        productCompany_id,
        productname,
        price,
        content,
        status,
        image_1,
        iamge_2,
        image_3,
        image_4,
        image_5,
      } = args;
  
     await  Product.create({
        category,
        productCompany_id,
        productname,
        price,
        content,
        status,
        image_1,
        iamge_2,
        image_3,
        image_4,
        image_5,
      });

      return true;
    },
  },
};
