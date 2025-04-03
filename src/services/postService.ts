import { deletePostInDB, getPostsFromDb, getUserPostsFromDb, savePostInDb } from "../repository/postRepository.js";
import { findUser, findUserBySession } from "../repository/loginRepository.js";

export const createPost = async (caption: string, token: string, photo: string) => {
    const session = await findUserBySession(token);
    const user = await findUser(session.email);

    if (!session) {
        throw {
            response: {
                status: 404,
                message: "User is not loged in system!"
            }
        }
    };

    if (!caption) {
        throw {
            response: {
                status: 404,
                message: "Caption is necessary!"
            }
        }
    };

    const userId = session.userId;

    const postToCreate = {
        userId,
        caption,
        photo,
        profileUrl: user.profileUrl,
        name: user.name
    };

    const result = await savePostInDb(postToCreate);

    if (result) {
        return postToCreate;
    } else {
        throw {
            response: {
                status: 500,
                message: "Quizz was not created, because mongo problem"
            }
        }
    }
};

export const getAllPosts = async () => {
    const posts = await getPostsFromDb();

    if (!posts) {
        throw {
            response: {
                status: 404,
                message: "Problem to find posts!"
            }
        }
    };

    return posts;
};

export const getUserPosts = async (token: string) => {
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

    const posts = await getUserPostsFromDb(userId);

    if (!posts) {
        throw {
            response: {
                status: 404,
                message: "Problem to find posts!"
            }
        }
    };

    return posts;
};

export const deleteUserPost = async (token: string, postId: string) => {
    const session = await findUserBySession(token);
    const user = await findUser(session.email);

    if (!session || !user) {
        throw {
            response: {
                status: 404,
                message: "User is not loged in system!"
            }
        }
    };

    await deletePostInDB(postId)
};