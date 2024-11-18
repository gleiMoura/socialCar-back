import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { CustomError } from "interfaces";

async function errorHandler(error: CustomError, req: Request, res: Response, next: NextFunction) {
    if (error.response) {
        res.status(error.response.status).send(error.response.message);
    } else {
        res.sendStatus(500)
    }
};

export default errorHandler;