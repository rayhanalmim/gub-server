const StudentCollections = require("../../../models/studentSchema");


const getStudent = async (req, res) => {
          const student = await StudentCollections.find({},{_id: 0});
          res.json(student);
};
module.exports = getStudent;