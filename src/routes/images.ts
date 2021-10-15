import express from 'express';
import resizeImage from '../operations/resizeImage';
import path from 'path';

const images = express.Router();

images.get('', async (req: express.Request, res: express.Response) => {})

export default images