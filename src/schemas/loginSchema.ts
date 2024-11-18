import { loginType } from "interfaces";
import joi, { ObjectSchema } from "joi";

const loginSchema: ObjectSchema<loginType> = joi.object({
    email: joi.string().required(),
    password: joi.string().required(),
});

export default loginSchema;
