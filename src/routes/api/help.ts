import express from 'express';
import path from 'path';
import fs from 'fs';

const help = express.Router();

help.get('/', (req: express.Request, res: express.Response) => {
    const text: string[] = [
        'To resize images: /api/images?filename={image_name}&width={required_width}&height={required_height}</br>',
        'Images available to resize:' 
    ]

    const imgDirectory = path.join('./assets', 'full')
    fs.readdir(imgDirectory, function (err, files) {
        files.forEach(function (file) {
        const fname = file.split('.').slice(0, -1).join('.');
        text.push(fname);
        });
        res.send(text.join('</br>'));
        });
    });

export default help;