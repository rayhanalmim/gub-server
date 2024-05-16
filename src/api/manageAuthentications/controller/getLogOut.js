const AdminCollections = require("../../../models/adminSchema");


const getLogOut = async (req, res) => {
    const response = await AdminCollections.updateOne(
        { key: 'password' },
        { $set: { isLogin: false } },
    )
     res.send(response)
};
module.exports = getLogOut;