import express from 'express';

const route2 = express.Router();

route2.get('/', (req, res) => {
    res.send('Route #2')
})

export default route2