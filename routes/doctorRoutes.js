const express = require("express");
const authmiddleware = require("../middlewares/authmiddleware");
const { getdoctorInfo, updateProfile } = require("../controllers/doctorctrl");
const router = express.Router();

router.get("/getdoctorinfo", authmiddleware, getdoctorInfo);
router.post("/updateProfile", authmiddleware, updateProfile);

module.exports = router;
