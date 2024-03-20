import { Response, Request, NextFunction } from "express";
import { ResponseError } from "./errorResponse";
import { logger } from "../utils/logging";

export const errorMiddleware = async (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof ResponseError) {
        logger.error(error.message);

        res.status(error.status).json({
            errors: error.message
        });
    } else {
        logger.error(error.message);
        
        res.status(500).json({
            errors: error.message
        });
    }
}
