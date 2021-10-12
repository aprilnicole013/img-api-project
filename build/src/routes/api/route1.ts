import express from 'express';
import path from 'path';

const images = express.Router();
const sharp = require('sharp');

images.get('/', async (req: express.Request, res: express.Response) => {
    res.send('Images')
})

export default images