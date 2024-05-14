const StudentCollections = require("../../../models/studentSchema");


const getStudent = async (req, res) => {
          const student = await StudentCollections.find();
      
          res.json(student);
};
module.exports = getStudent;