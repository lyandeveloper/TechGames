import { resolve } from 'path';

class FileController {
  show(req, res) {
    const { file } = req.params;

    const filePath = resolve(
      __dirname,
      '..',
      '..',
      '..',
      'tmp',
      'uploads',
      file
    );

    return res.sendFile(filePath);
  }
}

export default new FileController();
