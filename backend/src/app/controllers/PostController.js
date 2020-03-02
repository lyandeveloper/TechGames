import slugify from 'slugify';
import Post from '../models/Post';

class PostController {
  async index(req, res) {
    const { id, slug } = req.params;

    const post = await Post.findAll({
      where: {
        id,
        slug,
      },
    });

    return res.json(post);
  }

  async store(req, res) {
    const { filename: banner } = req.file;
    const { titulo, categoria, conteudo } = req.body;

    const postslug = slugify(titulo, {
      replacement: '-',
      lower: true,
      remove: true,
    });

    const post = await Post.create({
      banner,
      slug: postslug,
      titulo,
      categoria,
      conteudo,
    });

    return res.json(post);
  }
}

export default new PostController();
