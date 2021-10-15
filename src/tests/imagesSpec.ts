import resizeImage from "../operations/resizeImage";
import path from 'path';
import fs from 'fs';
import Jimp from 'jimp';

describe('Test image resize operation', () => {
    const testWidth = 200;
    const testHeight = 200;
    const testFileName = 'icelandwaterfall'
    const imgPath = path.join('./assets', 'thumbs', `${testFileName}_${testWidth}_${testHeight}.jpg`)

    beforeAll(async () => {
        if (fs.existsSync(imgPath)) {
            fs.unlinkSync(imgPath)
        }
    })

    it('test resize operation on image', async () => {
        const response = await resizeImage(testWidth, testHeight, testFileName)
        expect(response.success).toBeTrue()
        const resizedImg = await Jimp.read(path.join('./assets', 'thumbs', response.result))

        expect(resizedImg.getWidth()).toEqual(testWidth)
        expect(resizedImg.getHeight()).toEqual(testHeight)
    })

})