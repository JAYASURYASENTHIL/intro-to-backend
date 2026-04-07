import { createPost,updatePost,deletePost } from "../controllers/post.controller.js";
import {Router} from "express";

const router=Router();

router.route('/createPost').post(createPost);
router.route('/updatePost/:id').patch(updatePost);
router.route('/deletePost/:id').delete(deletePost);



export default router;