import { Request, Response, NextFunction } from "express";
import { AuthRequest } from "../types/authTypes";
import { CollectionService } from "../services/collectionService";

export class CollectionController {
    static async createCollection(req: AuthRequest, res: Response, next: NextFunction) {
        try {
            const data = await CollectionService.create({...req.body, userId: req.user?.data.id});

            return res.status(data.status).json({
                message: "success",
                data: data.data
            });
        } catch (e) {
            next(e);
        }
    }

    static async listCollection(req: AuthRequest, res: Response, next: NextFunction) {
        try {
            const data = await CollectionService.list(req, Number(req.params.brandId));

            return res.status(data.status).json({
                message: "success",
                data: data.data
            });
        } catch (e) {
            next(e);
        }
    }
}
