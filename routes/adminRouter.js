const express=require("express");
const router=express.Router();
const authMiddleware=require("../middleware/auth.js"); 
const adminController=require("../controllers/adminController.js");

router.use(authMiddleware.protect,authMiddleware.restrictTo("admin"));
router.get("/deleted-users",adminController.getDeletedUsers);
router.get("/deleted-products",adminController.getDeletedProducts);
router.patch("/restore-user/:id",adminController.restoreDeletedUser);
router.patch("/restore-product/:id",adminController.restoreDeletedProduct);
module.exports=router;