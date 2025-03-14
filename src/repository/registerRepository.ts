import { ObjectId } from 'mongodb';
import database from "../config/index.js"
import { registerType } from "../interfaces/index.js";

export const logUserInDb = async (credentials: registerType) => {
    try {
        const db = await database;
        await db.collection('users').insertOne(credentials)
    } catch (error) {
        console.log("Error trying log user in db", error);
    }
};

export const updateUserInDb = async (userId: string, profileLink: string, name: string) => {
    try {
        const db = await database;
        const result = await db.collection('users').updateOne(
            { _id: new ObjectId(userId) }, // Converte string para ObjectId
            { $set: { profileUrl: profileLink, name } }
        );

        if (result.matchedCount === 0) {
            console.warn(`No user found with id: ${userId}`);
        }

        return result;
    } catch (error) {
        console.error("Error updating user in db:", error);
        throw error;
    }
};

