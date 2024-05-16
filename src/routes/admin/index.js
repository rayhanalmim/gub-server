const express = require("express");
const { getAccess, getPermission, checkLoginStatus, getLogOut } = require("../../api/manageAuthentications/controller");
const router = express.Router();

router.post('/getAccess', getAccess);
router.post('/getLogin', getPermission);
router.get('/checkLoginStatus', checkLoginStatus);
router.get('/getLogOut', getLogOut);

module.exports = router;