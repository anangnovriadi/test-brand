import { Request } from "express";

export interface Auth {
    user?: {
        data: AuthPayload
    };
}

export interface AuthRequest extends Request {
    user?: {
        data: AuthPayload
    };
}

export interface AuthPayload {
    id: number;
    email: string;
    username: string;
}
