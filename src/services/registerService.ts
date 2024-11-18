import { registerType } from "interfaces";
import bcrypt from "bcrypt";
import { findUser } from "repository/loginRepository";
import { logUserInDb } from "repository/registerRepository";

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

    await logUserInDb({...credentials, password: passwordCrypt});
};