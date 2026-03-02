const questions = [
    {
        "question": "A cylindrical vessel of diameter 4 cm is partly filled with water. 300 lead balls are dropped in it. The raise in water level is 0.8 cm. The diameter of each ball is—",
        "options": ["0.4 cm", "0.6 cm", "0.8 cm", "0.2 cm"],
        "correct": 0
    },
    {
        "question": "The median of the data 13, 12, 23, 18, 26, 19, 14 is—",
        "options": ["13", "18", "14", "19"],
        "correct": 1
    }, 
    {
        "question": "The mode of 9, 10, 6, 9, 6, 7, 9, 9, 10, 8, 10 is—",
        "options": ["12", "10", "9", "11"],
        "correct": 2
    },
    {
        "question": "A school has 20 teachers, one of them retires at the age of 60 years and a new teacher is appointed. This change reduces the average age of teachers by 2 years. The age of new teacher is—",
        "options": ["30 years", "22 years", "20 years", "40 years"],
        "correct": 2
    },
    {
        "question": "If the standard deviation for the marks obtained by a student in monthly tests is 36, then the variance is—",
        "options": ["1296", "36", "6", "1/36"],
        "correct": 0
    },
    {
        "question": "The probability of getting a number greater than 2 or an even number in a single through of a fair die is—",
        "options": ["1/2", "2/3", "1/3", "5/6"],
        "correct": 3
    },
    {
        "question": "The median of the series 37.5, 35, 38, 38.5, 31, 27, 39, 34, 30.5 is—",
        "options": ["37.5", "35", "31", "34"],
        "correct": 2
    },
    {
        "question": "Histogram is useful to determine graphically the value of—",
        "options": ["Geometric mean", "Median", "Mode", "Arithmetic mean"],
        "correct": 2
    },
    {
        "question": "If the mean and median of a set of numbers are 8.9 and 9 respectively, then the mode will be—",
        "options": ["10.2", "8.2", "9.2", "7.2"],
        "correct": 2
    },
    {
        "question": "The mode of series 2, 3, 1, 2, 5, 3, 2, 2, 3, 5 is—",
        "options": ["5", "2", "3", "1"],
        "correct": 2
    },
    {
        "question": "A square and an equilateral triangle have equal perimeters. If the diagonal of the square is 6√2 cm, then area of the triangle is—",
        "options": ["12√3 cm²", "16√3 cm²", "12√2 cm²", "16√2 cm²"],
        "correct": 2
    },
    {
        "question": "If the difference between the circumference and radius of a circle is 37 cm, then the area of the circle is—",
        "options": ["154 cm²", "148 cm²", "259 cm²", "111 cm²"],
        "correct": 2
    },
    {
        "question": "A metal pipe has an external diameter of 4 cm and internal diameter of 3 cm and is 20 cm long, then the volume of the metal used is—",
        "options": ["440 cm³", "110 cm³", "220 cm³", "22 cm³"],
        "correct": 2
    },
    {
        "question": "The diagonal of a rectangle is thrice its smaller side. The ratio of the sides is—",
        "options": ["√2 : 1", "3 : 2", "√3 : 1", "2√2 : 1"],
        "correct": 2
    },
    {
        "question": "The probability of getting an even number, when a die is rolled, is—",
        "options": ["1/12", "1/36", "1/2", "1/6"],
        "correct": 2
    },
    {
        "question": "A cuboidal metal of dimensions 44 cm x 30 cm x 15 cm was melted and cast into a cylinder of height 28 cm. Its radius will be—",
        "options": ["5 cm", "15 cm", "10 cm", "20 cm"],
        "correct": 2
    },
    {
        "question": "A man deposited ₹ 8,000 in a bank for 3 years at 5% per annum compound interest. After 3 years he will get—",
        "options": ["₹ 9,261", "₹ 9,000", "₹ 9,200", "₹ 8,800"],
        "correct": 2
    },
    {
        "question": "A cylindrical vessel of diameter 4 cm is partly filled with water. 300 lead balls are dropped in it. The raise in water level is 0.8 cm. The diameter of each ball is—",
        "options": ["0.4 cm", "0.6 cm", "0.8 cm", "0.2 cm"],
        "correct": 2
    },
    {
        "question": "The median of the data 13, 12, 23, 18, 26, 19, 14 is—",
        "options": ["13", "18", "14", "19"],
        "correct": 2
    },
    {
        "question": "The mode of 9, 10, 6, 9, 6, 7, 9, 9, 10, 8, 10 is—",
        "options": ["12", "10", "9", "11"],
        "correct": 2
    },
    {
        "question": "A school has 20 teachers, one of them retires at the age of 60 years and a new teacher is appointed. This change reduces the average age of teachers by 2 years. The age of new teacher is—",
        "options": ["30 years", "22 years", "20 years", "40 years"],
        "correct": 2
    },
    {
        "question": "If the standard deviation for the marks obtained by a student in monthly tests is 36, then the variance is—",
        "options": ["1296", "36", "6", "1/36"],
        "correct": 2
    },
    {
        "question": "The probability of getting a number greater than 2 or an even number in a single through of a fair die is—",
        "options": ["1/2", "2/3", "1/3", "5/6"],
        "correct": 2
    },
    {
        "question": "The value of [(sec A + tan A) (1 - sin A)] is equal to—",
        "options": ["tan² A", "sin² A", "cos A", "sin A"],
        "correct": 2
    },
    {
        "question": "The points (a, 1), (1, -1) and (11, 4) are collinear for value of, 'a' equal to—",
        "options": ["6", "5", "4", "3"],
        "correct": 1
    }

];

let currentQuestion = 0;
let score = 0;
let timeLeft = 1200; // 20 minutes
let timerInterval;
let selectedAnswer = null;

// 🔥 Shuffle Function
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");
const quizSection = document.getElementById("quizSection");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const timerEl = document.getElementById("timer");
document.getElementById("question-number-display").style.display = "block";

// Start Test
startBtn.onclick = () => {
    shuffleQuestions(questions); // ✅ Random order
    startScreen.style.display = "none";
    quizSection.style.display = "block";
    loadQuestion();
    startTimer();
};

nextBtn.onclick = () => {
    if (selectedAnswer === null) {
        alert("Please select an answer!");
        return;
    }

    if (selectedAnswer === questions[currentQuestion].correct) {
        score++;
    }

    nextQuestion();
};

function loadQuestion() {
    selectedAnswer = null; // reset selected option

    const q = questions[currentQuestion];

    // Display question text
    questionEl.textContent = q.question;

    // Clear previous options
    optionsEl.innerHTML = "";

    // Create buttons for options
    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.classList.add("option-btn");

        // Option click handler
        btn.onclick = () => {
            selectedAnswer = index;

            // Remove highlight from all buttons
            document.querySelectorAll(".option-btn").forEach(b => {
                b.style.background = "";
                b.style.color = "";
            });

            // Highlight the selected button
            btn.style.background = "#cce5ff";
            btn.style.color = "#000";
        };

        optionsEl.appendChild(btn);
    });

    // Update question number display
    const numberDisplay = document.getElementById("question-number-display");
    numberDisplay.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    clearInterval(timerInterval);
    let percentage = (score / questions.length) * 100;

    if (percentage >= 70) {
        questionEl.textContent =
            `Test Completed! Score: ${score}/${questions.length} 
        😃🎉 Excellent Performance!`;
    }
    else if (percentage >= 40) {
        questionEl.textContent =
            `Test Completed! Score: ${score}/${questions.length} 😊👍 Good Attempt. Keep Improving!`;
    }
    else {
        questionEl.textContent =
            `Test Completed! Score: ${score}/${questions.length} ⚠️ Keep Practicing and Try Again.`;
    }
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    document.getElementById("question-number-display").style.display = "none";
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        timerEl.textContent =
            `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        if (timeLeft <= 0) {
            showResult();
        }
    }, 1000);
}
