import express from "express";

const router = express.Router();

router.get('/', (req, res)=>{
    res.json({message:"get all properties"})

});

export default router;