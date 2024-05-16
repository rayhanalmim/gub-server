const AdminCollections = require("../../../models/adminSchema");


const getAccess = async (req, res) => {
    const {email, password} = req.query;
    console.log(email, password);
    const student = await AdminCollections.findOne({
        $and: [{ email: email }, { password: password }]
    });

    console.log(student);
    if (student) {
        return res.status(200).send(student);
    } else {
        return res.status(201).send({ message: 'Student not found' });
    }
};
module.exports = getAccess;