import { Request, Response } from "express";
import { PostType } from "interfaces";
import { generateProfileLink } from "repository/filesRepository";
import { createPost } from "services/postService";

export const savePost = async (req: Request, res: Response) => {
    const file = req.file;
    const caption: string = req.body.caption;
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];

    const postImageLink = await generateProfileLink(file);

    const createdPost: PostType = await createPost(caption, token, postImageLink);

    res.send(createdPost).status(201);
};