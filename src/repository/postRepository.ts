import database from "../config/index.js"
import { PostType } from "../interfaces/index.js";
import { ObjectId } from "mongodb";

export const savePostInDb = async (post: PostType) => {
    try {
        const db = await database;
        const result = await db.collection('post').insertOne(post);
        return result;
    } catch (error) {
        console.log("Error trying to save quizz", error);
        throw error
    }
};

export const getPostsFromDb = async () => {
    try {
        const db = await database;
        const result = await db.collection('post').find().toArray();
        return result;
    } catch (error) {
        console.log("Error trying to save quizz", error);
        throw error
    }
};

export const getUserPostsFromDb = async (userId: string) => {
    try {
        const db = await database;
        const result = await db.collection('post').find({ userId }).toArray();
        return result;
    } catch (error) {
        console.log("Error trying to save quizz", error);
        throw error
    }
};

export const deletePostInDB = async (postId: string): Promise<boolean> => {
    try {
        const db = await database;
        const result = await db.collection("post").deleteOne({ _id: new ObjectId(postId) });

        if (result.deletedCount === 0) {
            console.warn(`Post with ID ${postId} not found.`);
            return false;
        }

        return true;
    } catch (error) {
        console.error("Error trying to delete post:", error);
        throw new Error("Failed to delete post");
    }
};
