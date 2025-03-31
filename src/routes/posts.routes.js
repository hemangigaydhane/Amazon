import express from 'express'

import {createpost,deletepost ,getallpost, getpost,updatepost}
from "../controllers/posts.controller.js"
const router = express.Router();

router.post('/create',createpost);
router.post('/get/:id',getpost);
router.post('/getall/:id',createpost);
router.post('/update/:id',updatepost);
router.post('/delete/:id',deletepost)

export default router ;