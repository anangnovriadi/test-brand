import _ from "lodash";
import { Brand, Permission, Collection } from "../models"; 
import { AuthRequest } from "../types/authTypes";
import { ResponseError } from "../utils/errorResponse";
import { collectionValidation } from "../validations/collectionValidation";
import { CollectionRequest } from "../types/collectionTypes";

export class CollectionService {
    static async create(body: CollectionRequest) {
        console.log(body)
        const validation = _.omit(body, ['userId']);
        const { value, error } = collectionValidation(validation);

        if (error) {
            throw new ResponseError(400, error?.details[0].message);
        }

        const brand = await Brand.findOne({
            where: {
                id: body.brandId
            }
        });

        if (!brand) {
            throw new ResponseError(404, "brand not found");
        }

        const permission = await Permission.findOne({
            where: {
                userId: body.userId,
                brandId: body.brandId,
                action: "create"
            }
        });

        if (!permission) {
            throw new ResponseError(400, "user don't have permission to create");
        }

        await Collection.create(value);

        return {
            status: 201,
            data: value
        }
    }

    static async list(req: AuthRequest, brandId: number) {
        const permission = await Permission.findOne({
            where: {
                userId: req.user?.data.id,
                brandId: brandId,
                action: "view"
            }
        });

        if (!permission) {
            throw new ResponseError(400, "user don't have permission to view");
        }

        const collections = await Collection.findAll({
            where: {
                brandId: brandId
            }
        });

        return {
            status: 200,
            data: collections
        }
    }
}