import { Request, Response, NextFunction } from "express";

export class TestController {
    static async checkHealth(req: Request, res: Response, next: NextFunction) {
        try {
            return res.json({
                message: "Good"
            });
        } catch (e) {
            next(e);
        }
    }
}
