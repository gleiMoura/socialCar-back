import { Request, Response } from "express";
import { QuizzType } from "interfaces";
import { getAllQuizzes, createQuizz } from "services/quizzService";

export const doQuizz = async (req: Request, res: Response) => {
    const quizz: QuizzType = req.body;
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];

    const createdQuizz: QuizzType = await createQuizz(quizz, token);

    res.send(createdQuizz).status(201);
};

export const sendAllQuizzes = async (req: Request, res: Response) => {
    const allQuizzes = await getAllQuizzes();

    res.send(allQuizzes).status(201);
};

