// Objeto literal:
let course = {
  name: "Certified Tech Developer",
  approvalGrade: 7,
  maxAbsences: 2,
  studentsList: [],
  addStudent: function (...student) {
    // parametro Rest - pode adicionar um ou mais (...student)
    this.studentsList.push(...student);
  },
  approveStudent: function (student) {
    let average = student.gradesAverage();
    if (average >= this.approvalGrade && student.absences < this.maxAbsences) {
      return true;
    } else if (
      student.absences == this.maxAbsences &&
      average >= this.approvalGrade * 1.1
    ) {
      return true;
    } else {
      return false;
    }
  },
  verifyApproval: function () {
    let approvalList = [];
    this.studentsList.forEach((eachStudent) => {
      approvalList.push(this.approveStudent(eachStudent));
    });
    return approvalList;
  },
};

// exportando objeto literal
module.exports = course;
