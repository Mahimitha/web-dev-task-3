// Simple Quiz
const question = document.getElementById('question');
const options = document.querySelectorAll('.option');
const nextBtn = document.getElementById('next-btn');

const quizQuestions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language"
        ],
        answer: 0
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Colorful Style Sheets",
            "Creative Style Sheets",
            "Cascading Style Sheets"
        ],
        answer: 2
    }
];

let currentQuestion = 0;

function showQuestion() {
    const q = quizQuestions[currentQuestion];
    question.textContent = q.question;
    
    options.forEach((option, index) => {
        option.textContent = q.options[index];
        option.onclick = function() {
            if(index === q.answer) {
                alert("Correct!");
            } else {
                alert("Wrong answer!");
            }
        };
    });
}

nextBtn.onclick = function() {
    currentQuestion++;
    if(currentQuestion >= quizQuestions.length) {
        currentQuestion = 0;
    }
    showQuestion();
};

showQuestion();

// Simple API Calls
const jokeBtn = document.getElementById('get-joke');
const factBtn = document.getElementById('get-fact');
const apiResult = document.getElementById('api-result');

jokeBtn.onclick = async function() {
    try {
        apiResult.textContent = "Loading joke...";
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        apiResult.innerHTML = `<strong>${data.setup}</strong><br>${data.punchline}`;
    } catch (error) {
        apiResult.textContent = "Couldn't load joke. Try again.";
    }
};

factBtn.onclick = async function() {
    try {
        apiResult.textContent = "Loading fact...";
        const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
        const data = await response.json();
        apiResult.textContent = data.text;
    } catch (error) {
        apiResult.textContent = "Couldn't load fact. Try again.";
    }
};