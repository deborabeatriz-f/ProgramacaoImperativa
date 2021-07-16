// Importando Função construtora:
let Student = require("./exStudent");

// Importando Objeto Literal:
let course = require("./exCourse");
const { approveList, verifyApproval } = require("./exCourse");

// Objetos literais:
let student1 = new Student("Helena", 0, [9, 10, 10, 10]);
let student2 = new Student("Clarissa", 0, [7, 8, 9, 9]);
let student3 = new Student("Débora", 0, [7, 9, 8, 8]);
let student4 = new Student("Mateus", 0, [4, 6, 7, 8]);
let student5 = new Student("Paulo", 0, [6, 6, 8, 6]);
let student6 = new Student("Derick", 0, [9, 8, 10, 8]);

course.addStudent(student1, student2, student3, student4, student5, student6);

// console.log(student1.name, student1.absences, student1.gradesAverage());
// console.log("----------------------------");
student2.addAbsence();
// // console.log(student2.name, student2.absences, student2.gradesAverage());
// // console.log("----------------------------");
student3.addAbsence();
student3.addAbsence();
// // console.log(student3.name, student3.absences, student3.gradesAverage());
// // console.log("----------------------------");
student4.addAbsence();
student4.addAbsence();
student4.addAbsence();
// // console.log(student4.name, student4.absences, student4.gradesAverage());
// // console.log("----------------------------");
student5.addAbsence();
student5.addAbsence();
student5.addAbsence();
student5.addAbsence();
// // console.log(student5.name, student5.absences, student5.gradesAverage());
// // console.log("----------------------------");
student6.addAbsence();
student6.addAbsence();
student6.addAbsence();
student6.addAbsence();
student6.addAbsence();
// console.log(student6.name, student6.absences, student6.gradesAverage());
// console.log("----------------------------");
// console.log(course);
// console.log("----------------------------");
console.log(course.studentsList);
// console.log("----------------------------");
// console.log(course.approveStudent(student1));
// console.log(course.approveStudent(student2));
// console.log(course.approveStudent(student3));
// console.log(course.approveStudent(student4));
// console.log(course.approveStudent(student5));
// console.log(course.approveStudent(student6));

console.log(course.verifyApproval());
