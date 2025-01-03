import database from "../config/index.js"
import { QuizzType } from "../interfaces/index.js";

export const saveQuizzInDb = async (quizz: QuizzType) => {
    try {
        const db = await database;
        const result = await db.collection('quizz').insertOne(quizz);
        return result;
    } catch (error) {
        console.log("Error trying to save quizz", error);
        throw error
    }
};

export const getQuizzesFromDb = async () => {
    try {
        const db = await database;
        const result = await db.collection('quizz').find().toArray();
        return result;
    } catch (error) {
        console.log("Error trying to save quizz", error);
        throw error
    }
};

export const getUserQuizzesFromDb = async (userId: string) => {
    try {
        const db = await database;
        const result = await db.collection('quizz').find({ userId }).toArray();
        return result;
    } catch (error) {
        console.log("Error trying to save quizz", error);
        throw error
    }
};

export const deleteQuizzInDb = async (id: string) => {
    try {
        const db = await database;
        await db.collection('quizz').deleteOne({ id });
    } catch (error) {
        console.log("Error trying to save quizz", error);
        throw error
    }
}
