const express = require("express");
const { getAccess, getPermission } = require("../../api/manageAuthentications/controller");
const router = express.Router();

router.post('/getAccess', getAccess);
router.post('/getLogin', getPermission);

module.exports = router;