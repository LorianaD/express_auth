import { Router } from "express";

import { searchUserSafe, searchUserUnsafe } from "../controllers/demo.controller.js";

const router = Router();

router.get('/search/safe', searchUserSafe);
router.get('/search/unsafe', searchUserUnsafe);

export default router;