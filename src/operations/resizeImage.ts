import path from 'path';
import fs from 'fs';
import {error} from 'console';

const sharp = require('sharp');

const resizeImage = async (
  width: number,
  height: number,
  filename: string
): Promise<{ success: boolean; result: string }> => {
  try {
    const newFilename = `${filename}_${width}_${height}.jpg`;

    if (!fs.existsSync(path.join('./assets', 'thumbs', newFilename))) {
      console.log('creating resized images');
      await sharp(`./assets/full/${filename}.jpg`)
        .resize(width, height)
        .toFile(path.join('./assets', 'thumbs', newFilename));
    }
    return { success: true, result: newFilename };
  } catch (error) {
    return { success: false, result: 'Cannot resize image. Please enter valid parameters' };
  }
};

export default resizeImage;
