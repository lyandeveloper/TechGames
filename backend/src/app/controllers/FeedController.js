import Post from '../models/Post';

class FeedController {
  async index(req, res) {
    /**
     * Get all posts from database and send the data to the home
     */
    const posts = await Post.findAll({
      order: [['createdAt', 'DESC']],
    });

    return res.json(posts);
  }
}

export default new FeedController();
