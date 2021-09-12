let student1 = { yearOfStudying: 1, facultyName: "Prawa" };
let student2 = { yearOfStudying: 3, facultyName: "Administracji" };
let student3 = { yearOfStudying: 1, facultyName: "Psychologia" };
let student4 = { yearOfStudying: 3, facultyName: "Stosunki Międzynarodowe" };
let student5 = { yearOfStudying: 2, facultyName: "Filozofia" };
let student6 = { yearOfStudying: 2, facultyName: "Chemia" };
let student7 = { yearOfStudying: 4, facultyName: "Ekonomia" };
let student8 = { yearOfStudying: 5, facultyName: "Języki obce" };
let student9 = { yearOfStudying: 3, facultyName: "Kosmetologia" };
let student10 = { yearOfStudying: 2, facultyName: "Bezpiczeństwa" };

let students = []; 
students.push(student1, student2, student3, student4, student5, student6, student7, student8, student9, student10);

function getFacultyName(student) {
	return student.facultyName;
}

let listOfFaculties = students.map(getFacultyName).sort();
console.log(listOfFaculties);

function sumStudentsYearsOfStudying(sumYearsOfStudying, currentStudent) {
	return sumYearsOfStudying + currentStudent.yearOfStudying;
}

let totalYearsOfStudying = students.reduce(sumStudentsYearsOfStudying, 0);
console.log(totalYearsOfStudying);