const questions = [
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
        "question": "A compound with a methoxy group is—",
        "options": ["alkane", "ester", "ether", "alcohol"],
        "correct": 2
    },
    {
        "question": "Which one is called slag?",
        "options": ["SiO₂", "CaO", "CaSiO₃", "CO"],
        "correct": 2
    },
    {
        "question": "The nitride ion has—",
        "options": ["7 protons + 10 electrons", "4 protons + 7 electrons", "7 protons + 4 electrons", "10 protons + 7 electrons"],
        "correct": 0
    },
    {
        "question": "How many C atoms are there in ethyl ethanoate?",
        "options": ["4", "5", "3", "6"],
        "correct": 0
    },
    {
        "question": "Which will not evolve H₂ with dilute H₂SO₄?",
        "options": ["Mg", "Zn", "Hg", "Fe"],
        "correct": 2
    },
    {
        "question": "The phosphate of a metal has the formula MHPO₄. The formula for its chloride will be—",
        "options": ["MCl", "M₂Cl₂", "MCl₂", "MCl₃"],
        "correct": 2
    },
    {
        "question": "Which one on heating at 120°C gives Plaster of Paris?",
        "options": ["Slaked lime", "Quicklime", "Gypsum", "Bleaching powder"],
        "correct": 2
    },
    {
        "question": "Which ore is a fluoride?",
        "options": ["Cryolite", "Bauxite", "Zinc blende", "Copper glance"],
        "correct": 0
    },
    {
        "question": "Propanol and acetone are—",
        "options": ["Functional isomers", "Chain isomers", "Geometrical isomers", "Position isomers"],
        "correct": 0
    },
    {
        "question": "The pH of a solution is 2.0. It was changed to 4.0. The change in [H⁺] is—",
        "options": ["becomes half", "becomes 100 times less", "becomes 10 times less", "becomes 2 times less"],
        "correct": 1
    },
    {
        "question": "Which one is liquid?",
        "options": ["I₂", "S", "P", "Br₂"],
        "correct": 3
    },
    {
        "question": "Which pair does not show diagonal relationship?",
        "options": ["Li, Mg", "B, Si", "Be, Al", "B, Mg"],
        "correct": 1
    },
    {
        "question": "Calamine is an ore of—",
        "options": ["Na", "Ca", "Zn", "Cu"],
        "correct": 2
    },
    {
        "question": "In Lothar Meyer's graph, which was plotted against atomic mass?",
        "options": ["Atomic volume", "Atomic radii", "Atomic number", "Density"],
        "correct": 0
    },
    {
        "question": "Which will not turn moist blue litmus paper red?",
        "options": ["CO₂", "SO₂", "P₂O₅", "CO"],
        "correct": 1
    },
    {
        "question": "Which one is isoelectronic with C atom?",
        "options": ["Na⁺", "Al³⁺", "O²⁻", "N⁺"],
        "correct": 3
    },
    {
        "question": "Thermite process uses powder of which metal?",
        "options": ["Cu", "Al", "Fe", "Cr"],
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
