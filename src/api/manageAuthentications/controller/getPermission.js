const AdminCollections = require("../../../models/adminSchema");


const getPermission = async (req, res) => {
    const response = await AdminCollections.updateOne(
        { key: 'password' },
        { $set: { isLogin: true } },
    )
     res.send(response)
};
module.exports = getPermission;