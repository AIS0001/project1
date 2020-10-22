const { createdelivery,getDelivery,getUserByid,updateUser,deleteUser ,login} = require("./delivery.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

const path = require("path");
const multer = require("multer");
// error from multeeer packege so i uninstall and re install ok?okcc

var maxSize = 1000000*90 ;


const storage = multer.diskStorage({
   destination: "./uploads/",//the error can find this path so we need to get this path
   filename: function(req, file, cb){
      cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
   }
});

const upload = multer({
   storage: storage,
   limits:{fileSize: maxSize},
}).fields([
 /*  {
     name: 'proof1',
     maxCount: 1,
   },*/
   {
     name: 'gallary',
     maxCount: 5,
   },
 ]);


// why you have error in port always? its linux problem? there is other things running cannot stop them
// router.post("/upload",upload,createdelivery); //this a middleware to access the req.files in controller for single 
router.post("/",upload,createdelivery);
//for mobile App without login
router.get("/",checkToken,getDelivery);
router.get("/:id",checkToken,getUserByid);
router.patch("/",checkToken,updateUser);
router.delete("/",checkToken,deleteUser);
router.post("/login",login);
// i think there is error in body parser
module.exports = router;