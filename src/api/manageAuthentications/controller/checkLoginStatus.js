const AdminCollections = require("../../../models/adminSchema");


const checkLoginStatus = async (req, res) => {
    const response = await AdminCollections.find({ isLogin: true });
    console.log(response);
   res.send(response)
};
module.exports = checkLoginStatus;