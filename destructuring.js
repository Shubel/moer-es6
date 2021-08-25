// 1st example
const company = {name: "programming hero", work: "web development", employee: 27, student: 5200};

// const name = company.name;
// const work = company.work;
// const employee = company.employee;
// const student = company.student;

// console.log(name);
// console.log(work);
// console.log(employee);
// console.log(student);

const {name, work, employee, student} = company;
console.log(name, work, employee, student);


// 2nd example
const student = {
    name: "Kuddus Ali",
    roll: 744,
    subject: {
        math: "higher-math",
        physics: "physics-2",
        chemistry: "chemistry-1"
    },
    teacher: {
        head: {
            headName: "Begom-Shaheb",
            position: "head-madam",
        },
        mathTeacher: "Salam-master",
        physicsTeacher: "Shohidul-BSc",
        chemistryTeacher: "Manik"
    },
};

// const position = student.teacher.head;
// console.log(position);

const {name, roll, subject, teacher} = student;
const {math, physics} = student.subject;
const {headName, position} = student.teacher.head;

console.log(name, roll, subject, teacher, math, physics, headName, position);
