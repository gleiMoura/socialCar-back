import db from "config";
import { Request, Response } from "express";
import signinUser from "services/loginService";

export const doLogin = async (req: Request, res: Response) => {
    const credentials = req.body;

    const userInformation = await signinUser(credentials);

    res.send(userInformation).status(201);
}