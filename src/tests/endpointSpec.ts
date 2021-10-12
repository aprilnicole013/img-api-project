//holds tests for code in index.js file
import supertest from 'supertest';
import app from '../index';
import path from 'path';
import fs from 'fs';

const request = supertest(app);
describe('Test endpoint responses', () => {
    const testWidth = 200
    const testHeight = 200
    const testFileName = 'icelandwaterfall';
    const imgName = `${testFileName}.jpg`
    const imgPath = path.join('./asssets/images', imgName)
    
    beforeAll(async () => {
        if (fs.existsSync(imgPath)){
            fs.unlinkSync(imgPath);
        }
    });
    
    it('test invalid request to api endpoint', async () => {
        const response = await request.get('/api/images?filename=fjord&width=100');
        expect(response.status).toBe(400);
    })
    it('tests valid request to api endpoint', async () => {
        expect(fs.existsSync(imgPath)).toBeFalse();
        const response = await request.get(`/api/images?filename=${testFileName}&width=${testWidth}&height=${testHeight}`)
        expect(response.status).toBeTrue()
        expect(fs.existsSync(imgPath)).toBeTrue()
    })
});

