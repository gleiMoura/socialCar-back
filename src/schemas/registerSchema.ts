import { registerType } from "interfaces";
import joi, { ObjectSchema } from "joi";

const registerSchema: ObjectSchema<registerType> = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required()
});

export default registerSchema;
