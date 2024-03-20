import request from "supertest";
import app from "../src/index";
import { CollectionService } from "../src/services/collectionService";
import { CollectionRequest } from "../src/types/collectionTypes";

const auth = async () => {
    const res = await request(app)
        .post("/api/login")
        .send({
            email: "testname@mail.com",
            password: "123456"
        });

    return res;
}

const collection: CollectionRequest = {
    name: "Test",
    description: "Test lorem",
}

describe('Test Collection', () => {
    it('should create collection and return 201', async () => {
        const res = await CollectionService.create({
            ...collection,
            userId: 1,
            brandId: 1,
        });

        expect(res.status).toBe(201);
    });

    it('should view collection and return 200', async () => {
        const resAuth = await auth();
        const res = await CollectionService.list({...resAuth.body, user: { data: { id: 1 }}}, 1);
        
        expect(res.status).toBe(200);
    });
});
