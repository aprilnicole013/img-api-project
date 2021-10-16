import express from 'express';

const imageValidator = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
): void => {
    const error: string[] = [];
    if (req.query.filename == undefined) error.push('Missing filename');
    if (req.query.width == undefined) error.push('Missing image width');
    if (req.query.height == undefined) error.push('Missing image height');
    if (error.length == 0) {
        next();
    } else {
    res.status(400).send(error.join('; '));
    }
};

export default imageValidator;