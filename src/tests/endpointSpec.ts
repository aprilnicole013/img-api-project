import supertest from 'supertest';
import app from '../index';
import path from 'path';
import fs from 'fs';

const request = supertest(app);
describe('Test endpoint responses:', () => {
    const testWidth = 200
    const testHeight = 200
    const testFileName = 'fjord';
    const imgName = `${testFileName}_${testWidth}_${testHeight}.jpg`
    const imgPath = path.join('./assets', 'thumbs',imgName)
    
    beforeAll(async () => {
        if (fs.existsSync(imgPath)){
            fs.unlinkSync(imgPath);
        }
    });

    
    it('tests INVALID request to api endpoint', async () => {
        
        const response = await request.get('/api/image?filename=fjord&width=100');
        expect(response.status).toBe(200);
        
        
    })
    
    it('tests VALID request to api endpoint', async () => {
        expect(fs.existsSync(imgPath)).toBeFalse();
        const response = await request.get(`/api/image?filename=${testFileName}&width=${testWidth}&height=${testHeight}`
        )
        expect(response.status).toBe(200)
        expect(fs.existsSync(imgPath)).toBeTrue()
    })
});

