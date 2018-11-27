console.log("Testing!");



// Array from Book 3, Chapter 6
let students = [
    {
        name: "Chris Miller",
        class: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        class: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        class: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        class: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        class: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        class: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        class: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        class: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        class: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        class: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        class: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        class: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]



let containerRef = document.querySelector("#container");

// h1 Function
const h1 = (title, style) => {
    return `<h1 class="${style}">${title}</h1>`
}


// section Function
const section = (title, style) => {
    return `<section class="bordered dashed ${style}">${title}</section>`
}


// aside Function
const aside = (title, style) => {
    return `<aside class="${style}">${title}</aside>`
}


let student = (name, className, info) => `
    <div id="student">
        ${h1(name, "xx-large passing")}
        ${section(className, "bordered dashed section--padded")}
        ${aside(info, "pushRight")}
    </div>
`

let failing_student = (name, className, info) => `
    <div id="student">
        ${h1(name, "xx-large failing")}
        ${section(className, "bordered dashed section--padded")}
        ${aside(info, "pushRight")}
    </div>
`


for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 60) {
    containerRef.innerHTML += student(students[i].name, students[i].class, students[i].info);
    } else {
    containerRef.innerHTML += failing_student(students[i].name, students[i].class, students[i].info);
    }
}