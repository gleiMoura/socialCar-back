import config from "config"
import { ObjectId } from "mongodb";

const { db } = config;

const findUser = async (email: string) => {
    try {
        const user = await db.collection('users').findOne({ email });

        return user;
    } catch (error) {
        console.log(error)
    }
};

const startSession = async (userId: ObjectId, token: string) => {
    try {
        await db.collection("sessions").insertOne({
            userId, token
        })
    } catch (error) {
        console.log("Error trying start user session", error)
    }
}

export {
    findUser,
    startSession
}