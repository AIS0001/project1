const { createdelivery,img,getDelivery,getUserByid,updateUser,deleteUser ,login} = require("./delivery.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
   destination: "./public/uploads/",
   filename: function(req, file, cb){
      cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
   }
});

const upload = multer({
   storage: storage,
   limits:{fileSize: 1000000},
}).single("proof1");


 router.post("/upload",createdelivery);
router.post("/",createdelivery);
router.get("/",checkToken,getDelivery);
router.get("/:id",checkToken,getUserByid);
router.patch("/",checkToken,updateUser);
router.delete("/",checkToken,deleteUser);
router.post("/login",login);

module.exports = router;