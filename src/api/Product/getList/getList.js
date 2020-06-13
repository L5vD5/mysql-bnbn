import { product, Sequelize } from "../../../../model";

const Op = Sequelize.Op;

export default {
  Query: {
    getList: async (_, args) => {
      const { user_id } = args;
     return await product.findAll({
        where: {  user_id: user_id ,  p_set: 1  },
      });
    },
  },
};