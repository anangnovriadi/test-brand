import express from "express";
import { auth } from "../utils/middleware";
import { TestController } from "../controllers/testController";
import { UserController } from "../controllers/userController";
import { BrandController } from "../controllers/brandController";
import { CollectionController } from "../controllers/collectionController";

export const router = express.Router();

router.get("/health", TestController.checkHealth);

router.post("/register", UserController.register);
router.post("/login", UserController.login);

router.post("/brand", auth, BrandController.createBrand);
router.get("/brands", auth, BrandController.listBrand);
router.post("/switch-brand", auth, BrandController.createPermission);

router.post("/collection", auth, CollectionController.createCollection);
router.get("/collection/:brandId", auth, CollectionController.listCollection);

export default router;
