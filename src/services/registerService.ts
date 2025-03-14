import bcrypt from "bcrypt";
import { registerType } from "../interfaces/index.js";
import { findUser, findUserBySession } from "../repository/loginRepository.js";
import { logUserInDb, updateUserInDb } from "../repository/registerRepository.js";

export const logUser = async (credentials: registerType) => {
    const { password, email } = credentials;

    const passwordCrypt = bcrypt.hashSync(password, 10);

    const user = await findUser(email);

    if (user) {
        throw {
            response: {
                status: 409,
                message: "User is loged in system"
            }
        }
    };

    await logUserInDb({ ...credentials, password: passwordCrypt });
};

export const logUserWithProfileLink = async (authHeader: string, profileLink: string) => {
    if (!authHeader) {
        throw {
            response: {
                status: 404,
                message: "It's necessary the token"
            }
        }
    }

    const token = authHeader.split(' ')[1];
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

    const result = await updateUserInDb(userId, profileLink, session.name);

    if (result) {
        return ({
            token,
            profileLink,
            email: session.email,
            name: session.name
        });
    };
};

