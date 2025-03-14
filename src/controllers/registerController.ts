import { Request, Response } from "express";
import { generateProfileLink } from "../repository/filesRepository.js";
import { logUser, logUserWithProfileLink } from "../services/registerService.js";


export const doRegister = async (req: Request, res: Response) => {
    const credentials = req.body;

    await logUser(credentials);

    res.sendStatus(201);
};


export const insertProfileImage = async (req: Request, res: Response) => {
    const file = req.file;
    const authHeader = req.headers?.authorization;

    const profileLink = await generateProfileLink(file);

    const profile = await logUserWithProfileLink(authHeader, profileLink);

    res.status(201).send(profile);
};