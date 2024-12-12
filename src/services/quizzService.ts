import { QuizzType } from "interfaces/index.js";
import { findUserBySession } from "../repository/loginRepository.js";
import { getQuizzesFromDb, saveQuizzInDb } from "repository/quizzRepository.js";

export const createQuizz = async (quizz: QuizzType, token: string) => {
    const session = await findUserBySession(token);

    if (!session) {
        throw {
            response: {
                status: 404,
                message: "User is not loged in system!"
            }
        }
    };

    const userId = session.userId;

    const quizzToCreate = {
        userId,
        ...quizz
    };

    const result = await saveQuizzInDb(quizzToCreate);

    if (result) {
        return quizzToCreate;
    } else {
        throw {
            response: {
                status: 500,
                message: "Quizz was not created, because mongo problem"
            }
        }
    }
};

export const getAllQuizzes = async () => {
    const quizzes = await getQuizzesFromDb();

    if (!quizzes) {
        throw {
            response: {
                status: 404,
                message: "Problem to find quizzes!"
            }
        }
    };

    return quizzes;
};
