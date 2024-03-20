import { Request, Response, NextFunction } from "express";
import { AuthRequest } from "../types/authTypes";
import { BrandService } from "../services/brandService";

export class BrandController {
    static async createBrand(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await BrandService.create(req.body);

            return res.status(data.status).json({
                message: "success",
                data: data.data
            });
        } catch (e) {
            next(e);
        }
    }

    static async listBrand(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await BrandService.list();

            return res.status(data.status).json({
                message: "success",
                data: data.data
            });
        } catch (e) {
            next(e);
        }
    }

    static async createPermission(req: AuthRequest, res: Response, next: NextFunction) {
        try {
            const data = await BrandService.createPermission({...req.body, userId: req.user?.data.id});

            return res.status(data.status).json({
                message: "success",
                data: data.data
            });
        } catch (e) {
            next(e);
        }
    }
}
