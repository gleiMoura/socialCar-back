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

export const updateUserInDb = async (userId: ObjectId, profileLink: string, name: string, token: string) => {
    try {
        const db = await database;

        const [userUpdate, sessionUpdate, postsUpdate] = await Promise.all([
            db.collection('users').updateOne(
                { _id: userId },
                { $set: { profileLink, name } }
            ),
            db.collection('sessions').updateMany(
                { token },
                { $set: { profileLink, name } }
            ),
            db.collection('post').updateMany(
                { userId },
                { $set: { profileUrl: profileLink } }
            ),
        ]);

        if (userUpdate.matchedCount === 0) {
            console.warn(`User not found with id: ${userId}`);
        }
        if (sessionUpdate.matchedCount === 0) {
            console.warn(`Session not found for user id: ${userId}`);
        }
        if (postsUpdate.matchedCount === 0) {
            console.warn(`Post not found for user id: ${userId}`);
        }

        return { userUpdate, sessionUpdate, postsUpdate };
    } catch (error) {
        console.error(`Error updating user ${userId} in db:`, error);
        throw error;
    }
};


