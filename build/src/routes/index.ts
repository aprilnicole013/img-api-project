import express from 'express';
import route1 from './api/route1';
import route2 from './api/route2';
import validateImage from '../middlewares/validateImage';
import images from './api/route1';

const routes = express.Router();

routes.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('main api route');
});

routes.use('/route1', validateImage, images);
routes.use('/route2', route2);

export default routes;