import path from 'path';
import fs from 'fs';

const sharp = require('sharp')

const resizeImage = async (
    width: number,
    height: number,
    filename: string
): Promise<{ success: boolean; result: string }> => {
    try{
        const newFilename = `${filename}_${width}_${height}.jpg`;

        if (!fs.existsSync(path.join('./assets', 'thumbs', newFilename))) {
            console.log('creating resized images');
            await sharp(`./assets/full/${filename}.jpg`).
            resizeImage(width, height).toFile(path.join('/assets', 'thumbs', newFilename))
        }
        return { success: true, result: newFilename }
    }catch (error){
        return {success: false, result: "Cannot resize image"}
    }
}

export default resizeImage