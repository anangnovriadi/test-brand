import { Request, Response, NextFunction } from "express";
import { AuthRequest } from "../types/authTypes";
import { Brand, Permission } from "../models"; 
import { ResponseError } from "../utils/errorResponse";
import { brandValidation, brandPermissionValidation } from "../validations/brandValidation";
import { BrandRequest, BrandPermissionRequest } from "../types/brandTypes";

export class BrandService {
    static async create(body: BrandRequest) {
        const { value, error } = brandValidation(body);

        if (error) {
            throw new ResponseError(400, error?.details[0].message);
        }

        await Brand.create(value);

        return {
            status: 201,
            data: value
        }
    }

    static async list() {
        const brands = await Brand.findAll();
        
        return {
            status: 200,
            data: brands
        }
    }

    static async createPermission(body: BrandPermissionRequest) {
        const { value, error } = brandPermissionValidation(body);

        if (error) {
            throw new ResponseError(400, error?.details[0].message);
        }

        const brandPermission = await Permission.findOne({
            where: value
        });

        if (brandPermission) {
            throw new ResponseError(400, "permission already created");
        }

        await Permission.create(value);

        return {
            status: 201,
            data: value
        }
    }
}

