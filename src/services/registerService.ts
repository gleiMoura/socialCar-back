import { registerType } from "interfaces";
import bcrypt from "bcrypt";
import { findUser, findUserBySession } from "../repository/loginRepository";
import { logUserInDb, updateUserInDb } from "../repository/registerRepository";

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

export const logUserWithProfileLink = async (token: string, profileLink: string) => {
    const user = await findUserBySession(token);

    if (!user) {
        throw {
            response: {
                status: 404,
                message: "User is not loged in system!"
            }
        }
    };

    const email = user.email;

    const credentials = await updateUserInDb(email, profileLink);

    return credentials
};

