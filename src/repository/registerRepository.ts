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

export const updateUserInDb = async (email: string, profileLink: string) => {
    try {
        const db = await database;
        const result = await db.collection('users').updateOne({ email }, { $set: { profileLink } })

        if (result.matchedCount > 0) {
            console.log("Documento atualizado com sucesso!")
        } else {
            console.log("Nenhum documento encontrado")
        }
    } catch (error) {
        console.log("Error trying log user in db", error);
    }
}
