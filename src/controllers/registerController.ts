import { Request, Response } from "express";

import { logUser } from "../services/registerService";

export const doRegister = async (req: Request, res: Response) => {
    const credentials = req.body;

    await logUser(credentials);

    res.sendStatus(201);
};