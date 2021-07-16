// Importando Função construtora:
let Student = require("./exStudent");

// Importando Objeto Literal:
let course = require("./exCourse");
const { approveList, verifyApproval } = require("./exCourse");

// Objetos literais:
let student1 = new Student("Helena", 0, [9, 10, 10, 10]);
let student2 = new Student("Clarissa", 1, [7, 8, 9, 9]);
let student3 = new Student("Débora", 2, [7, 9, 8, 8]);
let student4 = new Student("José", 3, [4, 6, 7, 8]);
let student5 = new Student("Samuel", 4, [6, 6, 8, 6]);
let student6 = new Student("Derick", 5, [9, 8, 10, 8]);

course.addStudent(student1, student2, student3, student4, student5, student6);

report = (student) => {
  let averageGrade = student.gradesAverage();
  let validApproval = course.approveStudent(student);
  console.log(`
     Nome: ${student.name}
     Absences: ${student.absences}
     Grades: ${student.grades}
     Average: ${averageGrade}
     Approved: ${validApproval}`
  );
};

course.studentsList.forEach((eachStudent) => report(eachStudent));

// report(student1);
// console.log(student1.name, student1.absences, student1.gradesAverage());
// console.log("----------------------------");
// student2.addAbsence();
// console.log("----------------------------");
// // // console.log(student2.name, student2.absences, student2.gradesAverage());
// console.log(course.studentsList);
// console.log(course.approveStudent(student1));
// console.log(course.verifyApproval());


