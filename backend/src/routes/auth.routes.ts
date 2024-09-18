import { Router } from "express";
import { ctrlGetUserInfoByToken, ctrlLoginUser, ctrlRegisterUser } from "../controllers/auth.controllers";

const router = Router();

router.post('/login', ctrlLoginUser)
router.post('/register', ctrlRegisterUser)
router.get('/usuario', ctrlGetUserInfoByToken)

export default router;