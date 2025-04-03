import { loginType } from "../interfaces/index.js";
import { findUser, startSession } from "../repository/loginRepository.js";
import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";


const signinUser = async (credentials: loginType) => {
    const { email, password } = credentials;

    const user = await findUser(email);

    const confirmPassword = user && bcrypt.compareSync(password, user.password);

    if (!user || !confirmPassword) {
        throw {
            response: {
                message: "Usuário ou senha incorretos!",
                status: 404
            }
        }
    };

    try {
        const userId = user._id;
        const token = uuid();

        const userInformation = {
            userId,
            name: user.name,
            profileLink: user?.profileLink || "",
            email,
            token
        };

        await startSession(userInformation, token);
        delete user.password;

        return userInformation;
    } catch (error) {
        console.error("Erro no servidor, " + error);
    }
};

export default signinUser;