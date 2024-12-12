import joi, { ObjectSchema } from 'joi';

const optionSchema = joi.object({
    option1: joi.string().required(),
    option2: joi.string().optional(),
    option3: joi.string().optional(),
});

const questionSchema = joi.object({
    title: joi.string().required(),
    options: optionSchema.required(),
});

const quizzSchema: ObjectSchema = joi.object({
    title: joi.string().required(),
    firtQuestion: questionSchema.required(),
    secondQuestion: questionSchema.optional(),
    thirdQuestion: questionSchema.optional(),
});

export default quizzSchema;
