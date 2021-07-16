// Objeto literal:
// let john = {
//   name: "John",
//   absences: 0,
//   grades: [6, 8, 5, 9],
// };

// Função construtora:
let Student = function (name, absences, grades) {
  this.name = name;
  this.absences = absences;
  this.grades = grades;
  this.gradesAverage = function () {
    //  poderia escrever também assim:
    //  let sum = this.grades.reduce((accumulate, element) => accumulate + element);
    //    return sum / this.grades.length;
    return (
      this.grades.reduce((accumulate, element) => accumulate + element) /
      this.grades.length
    );
  };
  this.addAbsence = function () {
    return this.absences++;
  };
};

// exportando função construtora
module.exports = Student;
