import { Request, Response, NextFunction } from "express";
import { AuthRequest, AuthPayload } from "../types/authTypes";
import jwt from "jsonwebtoken";

export const auth = (req: AuthRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const response = { message: "Unauthorized" }

    if (token == null) {
        return res.status(401).json(response);
    }

    const secret = process.env.ACCESS_TOKEN_SECRET as string;

    req.user = parseToken(authHeader ?? '');
    jwt.verify(token, secret, (err: any, user: any) => {
        if (err) {
            return res.status(401).json(response);
        }

      next();
    });
}

export const parseToken = (token: string) => {
    return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
}
  
export const generateAccessToken = (payload: AuthPayload) => {
    const secret = process.env.ACCESS_TOKEN_SECRET as string;

    return jwt.sign({ data: payload }, secret, {
        expiresIn: process.env.EXPIRED_TOKEN
    });
}
  
export const generateTokenSecret = () => {
    let token = require("crypto").randomBytes(32).toString("hex");
    return token;
}
