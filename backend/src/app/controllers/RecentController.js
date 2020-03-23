import Post from '../models/Post';

class RecentController {
  async index(req, res) {
    const recents = await Post.findAll({
      limit: 3,
      order: [['createdAt', 'DESC']],
      attributes: ['id', 'titulo', 'banner', 'slug', 'categoria', 'createdAt'],
    });

    return res.json(recents);
  }
}

export default new RecentController();
