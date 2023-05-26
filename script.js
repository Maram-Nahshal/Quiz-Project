// Questions will be asked
const Questions = [{
    id: 0,
    q: "The Cleanroom philosophy was proposed by _________",
    a: [{ text: "Linger", isCorrect: false },
        { text: "Mills", isCorrect: false },
        { text: "Dyer", isCorrect: true },
        { text: "All of the Mentioned", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Attributes of good software is ____________",
    a: [{ text: "Development", isCorrect: false, isSelected: false },
        { text: "Functionality", isCorrect: false },
        { text: "Maintainability ", isCorrect: false },
        { text: "Maintainability & functionality", isCorrect: true }
    ]

},
{
    id: 2,
    q: "Who is the father of Software Engineering?",
    a: [{ text: "Margaret Hamilton", isCorrect: false },
        { text: "Alan Turing", isCorrect: false },
        { text: "Watts S. Humphrey", isCorrect: true },
        { text: "Boris Beizer", isCorrect: false }
    ]
},
{
    id: 3,
    q: "What are the features of Software Code?",
    a: [{ text: "Simplicity", isCorrect: false },
        { text: "Accessibility", isCorrect: false },
        { text: "All of the above", isCorrect: false },
        { text: "Modularity", isCorrect: true }
    ]
},
{
    id: 4,
    q: "____________ is a software development activity that is not a part of software processes",
    a: [{ text: "Validation", isCorrect: false },
        { text: "Dependence", isCorrect: true },
        { text: "Development", isCorrect: false },
        { text: "Specification", isCorrect: false }
    ]
},
{
    id: 5,
    q: "CASE stands for",
    a: [{ text: "Control Aided Science and Engineering", isCorrect: false },
        { text: "Computer-Aided Software Engineering", isCorrect: true },
        { text: "Cost Aided System Experiments", isCorrect: false },
        { text: "None of the mentioned", isCorrect: false }
    ]
}

]

// Set start
var start = true;

// Iterate
function iterate(id) {

// Getting the result display section
var result = document.getElementsByClassName("result");
result[0].innerText = "";

// Getting the question
const question = document.getElementById("question");


// Setting the question text
question.innerText = Questions[id].q;

// Getting the options
const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');


// Providing option text
op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;

// Providing the true or false value to the options
op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

// Show selection for op1
op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})


}

if (start) {
    iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
    start = false;
    if (id < 4) {
        id++;
        iterate(id);
        console.log(id);
    }

})