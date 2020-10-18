const { createdelivery,getDelivery,getUserByid,updateUser,deleteUser ,login} = require("./delivery.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/",createdelivery);
router.get("/",checkToken,getDelivery);
router.get("/:id",checkToken,getUserByid);
router.patch("/",checkToken,updateUser);
router.delete("/",checkToken,deleteUser);
router.post("/login",login);

module.exports = router;