const AdminCollections = require("../../../models/adminSchema");


const getAccess = async (req, res) => {
          const student = await AdminCollections.find();
          res.json(student);
};
module.exports = getAccess;