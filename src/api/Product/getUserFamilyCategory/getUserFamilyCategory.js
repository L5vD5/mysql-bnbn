import {
  productFamily,
  productFamily_user,
  familyCategory,
  Sequelize
} from "../../../../model";

const Op = Sequelize.Op;
export default {
  Query: {
    getUserFamilyCategory: async (_, args) => {
      const { id } = args;
        

      return familyCategory.findAll({ include: [{ model: productFamily }] });
    },
  },
};
