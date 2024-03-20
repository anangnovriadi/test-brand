import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/userService";

export class UserController {
    static async register(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await UserService.register(req);

            return res.status(data.status).json({
                message: "success",
                data: data.data
            });
        } catch (e) {
            next(e);
        }
    }

    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await UserService.login(req);

            return res.status(data.status).json({
                message: "success",
                data: data.data
            });
        } catch (e) {
            next(e);
        }
    }
}
