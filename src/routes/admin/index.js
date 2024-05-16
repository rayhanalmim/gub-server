const express = require("express");
const { getAccess, getPermission, checkLoginStatus } = require("../../api/manageAuthentications/controller");
const router = express.Router();

router.post('/getAccess', getAccess);
router.post('/getLogin', getPermission);
router.get('/checkLoginStatus', checkLoginStatus);

module.exports = router;