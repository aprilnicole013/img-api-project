import express from 'express';

const app = express();
const port = 3000;

app.get('/api', (req, res) => {
    res.send('server is working');
})

app.listen(port, () => {
    console.log('server started at http://localhost:`${port}')
})

export default express