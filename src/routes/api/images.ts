import express from 'express';
import resizeImage from '../../operations/resizeImage';
import path from 'path';

const images = express.Router();

images.get('/', async (req: express.Request, res: express.Response) => {
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  if (isNaN(width) != true && isNaN(height) != true) {
    const filename = req.query.filename as string;
    const resize = await resizeImage(width, height, filename);
    if (resize.success) {
      res.sendFile(resize.result, { root: path.join('./assets', 'thumbs') });
    } else {
      res.send(resize.result);
    }
  }
});

export default images;
