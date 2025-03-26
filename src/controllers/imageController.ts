import { Request, Response } from "express";
import { generateProfileLink } from "../repository/filesRepository.js";

export const saveImage = async (req: Request, res: Response) => {
    const file = req.file;

    const imageLink = await generateProfileLink(file);

    res.send(imageLink).status(201);
};