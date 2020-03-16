import Post from '../models/Post';

class Category {
  async index(req, res) {
    const { category } = req.params;

    const postCategory = await Post.findAll({
      where: {
        categoria: category,
      },
      attributes: ['id', 'banner', 'slug', 'titulo', 'categoria', 'createdAt'],
    });

    return res.json(postCategory);
  }
}

export default new Category();
