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
      const { user_id } = args;
      return await productFamily.findAll({
        include: [
          { model: familyCategory},
          { model: productFamily_user, where: { user_id } },
        ],
        group:"id"
      });
    },
  },
};
