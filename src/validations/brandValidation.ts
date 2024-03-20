import Joi from "joi";
import { Request } from "express";
import { BrandRequest, BrandPermissionRequest } from "../types/brandTypes";

export const brandValidation = (body: BrandRequest) => {
    let schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().optional(),
    });

    const { value, error } = schema.validate(body);

    return {
        value: value,
        error: error
    }
}

export const brandPermissionValidation = (body: BrandPermissionRequest) => {
    let schema = Joi.object({
        userId: Joi.number().required(),
        brandId: Joi.number().required(),
        action: Joi.string().valid('create', 'view').required()
    });

    const { value, error } = schema.validate(body);

    return {
        value: value,
        error: error
    }
}
