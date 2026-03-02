const questions =  [
    {
        question: "A candle is placed 3 cm in front of a concave mirror whose radius of curvature is 24 cm. What will be the characteristics of the image formed?",
        options: ["virtual, erect & magnified", "real, erect & magnified", "real, inverted & reduced", "virtual, inverted & reduced"],
        correct: 0
    },
    {
        question: "The image of a small electric bulb mounted on one wall of a room is to be formed on the opposite wall, which is 3 m away, using a large convex lens. What is the maximum possible focal length of the lens required for this setup?",
        options: ["1.25m", "2.25m", "0.75m", "1.75m"],
        correct: 2
    },
    {
        question: "For a prism with an angle of 60°, the angle of minimum deviation is 30°. What will be the approximate speed of light in the material of the prism?",
        options: ["3 * 10⁸  m/s", "2.82 * 10⁸  m/s", "2.42 * 10⁸  m/s", "2.12 * 10⁸  m/s"],
        correct: 3
    },
    {
        question: "Which energy source contributes the highest share of energy production in India?",
        options: ["CNG", "LPG", "Biogas", "Coal"],
        correct: 3
    },
    {
        question: "Bhadla Solar Park is recognized as the world’s largest solar park. In which Indian state is it situated?",
        options: ["Tamil Nadu", "Gujarat", "Rajasthan", "Kerala"],
        correct: 2
    },
    {
        question: "Which of the following is a renewable source of energy?",
        options: ["Petrol", "Coal", "Natural gas", "Wind"],
        correct: 3
    },
    {
        question: "Among the following fuels, which one possesses the highest calorific value?",
        options: ["Methane", "LPG", "Petrol", "Hydrogen"],
        correct: 3
    },
    {
        question: "Which type of ecological pyramid is always upright and can never appear inverted in a natural ecosystem?",
        options: ["Pyramid of numbers", "Pyramid of energy", "Pyramid of biomass", "Both energy and biomass pyramids"],
        correct: 1
    },
    {
        "question": "Which of the following is obtained as a by-product during making of a soap?",
        "options": ["Wax", "Ethyl acetate", "Ethyl alcohol", "Glycerol"],
        "correct": 3
    },
    {
        "question": "Which is the weakest acid?",
        "options": ["HCOOH", "C₆H₅COOH", "CH₃COOH", "ClCH₂COOH"],
        "correct": 2
    },
    {
        "question": "Which is the most basic oxide?",
        "options": ["Cl₂O₇", "P₄O₁₀", "PbO", "SnO"],
        "correct": 0
    },
    {
        "question": "Vinegar is a dilute solution of—",
        "options": ["HCOOH", "CH₃COOH", "COOH-COOH", "ClCH₂COOH"],
        "correct": 1
    },
    {
        "question": "Which is true about setting of Plaster of Paris?",
        "options": ["Expansion in volume", "Reaction with atmospheric CO₂", "Oxidation by atmospheric O₂", "Dehydration"],
        "correct": 2
    },
    {
        "question": "An alkene treated with a solution of alkaline KMnO₄ gives—",
        "options": ["monohydric alcohol", "dihydric alcohol", "ether", "aldehyde"],
        "correct": 1
    },
    {
        "question": "Which is least reactive metal?",
        "options": ["Cu", "Al", "Zn", "Ca"],
        "correct": 0
    },
    {
        "question": "Which one has greatest hydrated radius?",
        "options": ["Na⁺", "K⁺", "Rb⁺", "Cs⁺"],
        "correct": 0
    },
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
