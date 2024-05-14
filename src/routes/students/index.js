const express = require("express");
const { getStudents } = require("../../api/manageStudents/controllers");
const router = express.Router();

router.get('/getStudents', getStudents);

module.exports = router;