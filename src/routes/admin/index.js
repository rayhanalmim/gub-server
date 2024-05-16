const express = require("express");
const { getAccess } = require("../../api/manageAuthentications/controller");
const router = express.Router();

router.get('/getAccess', getAccess);

module.exports = router;