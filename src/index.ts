// import images from "./routes/api/images";
import express from 'express';

const app = express();
const port = 3000;

app.use('/api', );

app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});

export default app