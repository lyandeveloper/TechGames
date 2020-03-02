import Sequelize, { Model } from 'sequelize';

class Post extends Model {
  static init(sequelize) {
    super.init(
      {
        banner: Sequelize.STRING,
        slug: Sequelize.STRING,
        titulo: Sequelize.STRING,
        categoria: Sequelize.STRING,
        conteudo: Sequelize.TEXT,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Post;
