import database from "../config/index.js"

const findUser = async (email: string) => {
    try {
        const db = await database;
        const user = await db.collection('users').findOne({ email });

        return user;
    } catch (error) {
        console.log(error)
    }
};

const findUserBySession = async (token: string) => {
    try {
        const db = await database;
        const user = await db.collection('sessions').findOne({ token });

        return user;
    } catch (error) {
        console.log(error)
    }
}

const startSession = async (userInformation: any, token: string) => {
    try {
        const db = await database;
        await db.collection("sessions").insertOne({
            ...userInformation, token
        })
    } catch (error) {
        console.log("Error trying start user session", error)
    }
}

export {
    findUser,
    startSession,
    findUserBySession
}