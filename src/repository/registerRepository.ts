import config from "config"
import { registerType } from "interfaces";

const { db } = config;

export const logUserInDb = async (credentials: registerType) => {
    try {
        await db.collection('users').insertOne(credentials)
    } catch (error) {
        console.log("Error trying log user in db", error);
    }
};
