const express = require("express");
const {
  registercontroller,
  logincontroller,
  authcontroller,
  doctorcontroller,
  notificationcontroller,
  deleteallnotification,
} = require("../controllers/userctrl");
const authmiddleware = require("../middlewares/authmiddleware");

//router object
const router = express.Router();

//register post
router.post("/register", registercontroller);
//login post
router.post("/login", logincontroller);
//middlewareauthentication
router.post("/getuserdata", authmiddleware, authcontroller);
//applydoctor post
router.post("/apply-doctor", authmiddleware, doctorcontroller);
//for notification
router.post("/getallnotification", authmiddleware, notificationcontroller);
//for notifiaction delete
router.post("/deleteallnotification", authmiddleware, deleteallnotification);
module.exports = router;
