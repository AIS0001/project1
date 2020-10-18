const { createparty,getUsers,getUserByid,updateUser,deleteUser ,login} = require("./party.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/create",createparty);
router.get("/create",checkToken,getUsers);
router.get("/:id",checkToken,getUserByid);
router.patch("/",checkToken,updateUser);
router.delete("/",checkToken,deleteUser);
router.post("/login",login);

module.exports = router;