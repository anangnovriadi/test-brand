import { Request, Response, NextFunction } from "express";
import md5 from "md5";
import _ from "lodash";
import { User } from "../models"; 
import { ResponseError } from "../utils/errorResponse";
import { registerValidation, loginValidation } from "../validations/userValidation";
import { generateAccessToken } from "../utils/middleware";

export class UserService {
    static async register(req: Request) {
        const { value, error } = registerValidation(req.body);

        if (error) {
            throw new ResponseError(400, error?.details[0].message);
        }

        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });

        if (user) {
            throw new ResponseError(400, "email already exists");
        }

        value.password = md5(value.password);
        await User.create(value);

        const result = _.omit(value, ['password']);

        return {
            status: 200,
            data: result
        }
    }

    static async login(req: Request) {
        const { value, error } = loginValidation(req.body);

        if (error) {
            throw new ResponseError(400, error?.details[0].message);
        }
        
        const user = await User.findOne({
            attributes: ['id', 'email', 'username'],
            where: {
                email: req.body.email,
                password: md5(value.password)
            }
        });

        if (!user) {
            throw new ResponseError(400, "email or password is wrong");
        }

        const token = generateAccessToken({
            id: Number(user.id),
            email: user.email,
            username: user.username,
        });

        return {
            status: 200,
            data: {
                token: token,
            }
        }
    }
}