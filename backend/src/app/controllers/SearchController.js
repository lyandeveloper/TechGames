import Post from '../models/Post';
import { Op } from 'sequelize';

class SearchController {
  async index(req, res) {
    const { result } = req.query;

    const resultado = await Post.findAll({
      where: {
        slug: {
          [Op.like]: '%' + result.toLowerCase() + '%',
        },
      },
    });

    return res.json(resultado);
  }
}

export default new SearchController();
