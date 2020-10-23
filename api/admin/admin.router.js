const { updateUserDetails,deletePartyRecord,deleteDeliveryRecord,updateDeliveryDetails,getParty,createadmin,login} = require("./admin.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/",createadmin);
router.post("/getparty",checkToken,getParty); 
router.post("/updateparty",updateUserDetails);
router.post("/updatedelivery",updateDeliveryDetails);
router.post("/deleteparty",deletePartyRecord);
router.post("/deletedelivery",deleteDeliveryRecord);
/*
router.get("/:id",checkToken,getUserByid);
router.patch("/",checkToken,updateUser);
router.delete("/",checkToken,deleteUser);*/
router.post("/login",login);

module.exports = router;