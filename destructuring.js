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
const {name, roll, subject, teacher} = student;
const {math, physics} = student.subject;
const {headName, position} = student.teacher.head;

console.log(name, roll, subject, teacher, math, physics, headName, position);
