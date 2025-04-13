import express from 'express'
import { updateuser } from '../controllers/user.controller';


const router = express.Router();

router.get("/getall",getaAllproduct),
router.get("get/:id",getproduct),
router.put("/update/:id",updateuser),
router.delete("/delete/:id",deleteProduct)

export default router;