const { Product } = require("../../../../models");

export default {
  Mutation: {
    createProduct: async (_, args) => {
      const {
        FamilyCategoryId,
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
  console.log(args);
     await  Product.create({
      FamilyCategoryId,
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
