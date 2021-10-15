import images from './routes/images';
import imageValidator from './middleware/imageValidator'
import express from 'express';

const app = express();
const port = 3000;

app.use('/api/images', imageValidator, images);

app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});

export default app