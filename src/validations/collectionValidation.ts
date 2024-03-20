import Joi from "joi";
import { Request } from "express";
import { CollectionRequest } from "../types/collectionTypes";

export const collectionValidation = (body: CollectionRequest) => {
    let schema = Joi.object({
        brandId: Joi.number().required(),
        name: Joi.string().required(),
        description: Joi.string().optional(),
    });

    const { value, error } = schema.validate(body);

    return {
        value: value,
        error: error
    }
}
