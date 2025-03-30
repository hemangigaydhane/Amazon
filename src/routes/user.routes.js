import express from 'express';

const router = express.Router();

router.get("/create",(req, res)=>{
    //bussiness logic of creating a user account 
});

router.get("/getall",(req,res)=>{
    //bussiness logic
});

router.get("/api/v1/user/get/:id",(req,res)=>{
    //bussiness logic of deleting users
})

router.delete("/api/v1/user/delete/:id",(req,res)=>{
    // bussiness logic of updating all users
})

export default router;