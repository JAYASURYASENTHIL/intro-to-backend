//my get router
import {getPosts} from "../controllers/get.controller.js";
import {Router} from "express";

const router = Router();

router.route('/getPosts').get(getPosts);

export default router;