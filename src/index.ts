import routes from "../build/src/routes/index";
import express from 'express'

const app = express();
const port = 3000;

app.use('/api', routes);

app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});