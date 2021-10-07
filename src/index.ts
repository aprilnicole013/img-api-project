const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('server is working');
});

app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});