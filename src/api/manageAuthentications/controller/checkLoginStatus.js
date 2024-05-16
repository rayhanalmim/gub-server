const AdminCollections = require("../../../models/adminSchema");


const checkLoginStatus = async (req, res) => {
    const response = await AdminCollections.find({ isLogin: true });
    if(response){
        res.send("true");
    }else{
        res.send('false')
    }
};
module.exports = checkLoginStatus;