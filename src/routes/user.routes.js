import express from 'express';
import {createuser,deleteuser,getalluser,getuser,updateuser,logoutuser,loginuser}
from "../controllers/user.controller.js";

const router = express.Router();

router.post("/create",createuser);

router.get("/getall",getalluser);

router.get('/get/:id',getuser);

router.delete("/delete/:id",deleteuser);

router.put('/update/:id',updateuser);

router.put('/logout',logoutuser);

router.post('/login',loginuser)


export default router;