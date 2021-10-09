import express from 'express';
import route1 from './api/route1';
import route2 from './api/route2';

const routes = express.Router();

routes.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('main api route');
});

routes.use('/route1', route1);
routes.use('/route2', route2);

export default routes;