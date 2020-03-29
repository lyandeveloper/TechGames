import slugify from 'slugify';
import Post from '../models/Post';
import sequelize from 'sequelize';

class PostController {
  async index(req, res) {
    const { id, slug } = req.params;
    const post = await Post.findAll({
      where: {
        id,
        slug,
      },
    });

    await Post.update(
      { views: sequelize.literal('views + 1') },
      { where: { id: id } }
    );
    return res.json(post);
  }

  async store(req, res) {
    const { filename: banner } = req.file;
    const { titulo, categoria, conteudo } = req.body;

    const postslug = slugify(titulo, {
      replacement: '-',
      lower: true,
      strict: true,
    });

    const post = await Post.create({
      banner,
      slug: postslug,
      titulo,
      categoria,
      conteudo,
      views: 0,
    });

    return res.json(post);
  }
}

export default new PostController();
