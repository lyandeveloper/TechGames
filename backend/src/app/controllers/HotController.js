import Post from '../models/Post';

class HotController {
  async index(req, res) {
    const trending = await Post.findAll({
      order: [['views', 'DESC']],
      limit: 5,
    });

    return res.json(trending);
  }
}

export default new HotController();
