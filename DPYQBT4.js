const questions = [
    {
        "question": "A 5 cm long object is placed at a distance of 20 cm in front of a convex lens, the radius of curvature of the mirror is 30 cm. The size of the image will be—",
        "options": ["3.21 cm", "2.14 cm", "1.23 cm", "7.33 cm"],
        "correct": 1
    },
    {
        "question": "How much work will be required to move a charge of 3C between two points, if the potential difference between them is 15 V ?",
        "options": ["45 J", "30 J", "55 J", "60 J"],
        "correct": 0
    }, 
    {
        "question": "It is a by product of biogas—",
        "options": ["Manure", "Water gas", "Hydrogen", "H₂S"],
        "correct": 3
    },
    {
        "question": "This fuel is used in thermal power plants in India—",
        "options": ["Hydrogen", "CNG", "Uranium", "Fossil fuel"],
        "correct": 3
    },
    {
        "question": "According to Ohm's law, V = IR, then—",
        "options": ["V ∝ R", "I ∝ R", "V ∝ 1/I", "V ∝ I"],
        "correct": 3
    },
    {
        "question": "Which of the following terms does not represent electric power in a circuit ?",
        "options": ["I²R", "IR²", "VI", "V²/R"],
        "correct": 0
    },
    {
        "question": "If the number of turns in a coil is N, then the value of self-inductance will be proportional to—",
        "options": ["N⁰", "N", "N²", "N⁻²"],
        "correct": 2
    },
    {
        "question": "A long straight wire carries a current of 12 A. At what distance from it will the magnetic field be equal to 3 × 10⁻⁵ Wb/m² ?",
        "options": ["8 × 10⁻²m", "12 × 10⁻²m", "18 × 10⁻²m", "24 × 10⁻²m"],
        "correct": 0
    },
    {
        "question": "Which has the shortest wavelength ?",
        "options": ["γ- Gamma rays", "Infrared rays", "Ultra-violet light", "x-rays"],
        "correct": 0
    },
    {
        "question": "The time coefficient of a C-R circuit will be—",
        "options": ["1/CR", "CR", "C/R", "R/C"],
        "correct": 1
    },
    {
        "question": "If the refractive index of glass with respect to air is 1.5, then the refractive index of air with respect to glass will be—",
        "options": ["3/2", "2/3", "1/2", "1"],
        "correct": 1
    },
    {
        "question": "If a force of 1 Newton is applied on an object of mass 1 kg which is free to move, then it will move—",
        "options": ["At a speed of 1 ms⁻¹", "At a speed of 1 kms⁻¹", "At acceleration of 1 ms⁻²", "With uniform velocity"],
        "correct": 2
    },
    {
        "question": "A concave mirror forms a real image at 3x magnification of an object placed at a distance of 10 cm in front of the mirror. At what distance is the image ?",
        "options": ["-30 cm", "30 cm", "20 cm", "20 cm"],
        "correct": 0
    },
    {
        "question": "The refractive index of the material of the prism (60°) is √3 , the angle of minimum deviation will be—",
        "options": ["30°", "45°", "60°", "75°"],
        "correct": 2
    },
    {
        "question": "The speed of light in air and diamond is 3 × 10⁸ ms⁻¹ or 1.24 × 10⁸ ms⁻¹ respectively. The refractive index of diamond is—",
        "options": ["1.33", "2.42", "1.74", "1.79"],
        "correct": 1
    },
    {
        "question": "Three resistors of 5Ω, 10Ω and 15Ω are connected in series with a 12V power supply. The potential difference (in volts) across each resistor is respectively—",
        "options": ["2, 4, 6", "3, 5, 7", "5, 7, 9", "1, 2, 3"],
        "correct": 0
    },
    {
        "question": "An electric motor draws 5A from a 220V power supply. The energy consumed by it in 2 hours (in kWh) will be—",
        "options": ["1.6", "2.2", "2.9", "0.73"],
        "correct": 1
    },
    {
        "question": "1 Horsepower is equal to—",
        "options": ["746/10⁹ Gigawatt", "10⁶ Gigawatt", "10³ Gigawatt", "674/10⁹ Gigawatt"],
        "correct": 3
    },
    {
        "question": "Every hot object emits—",
        "options": ["X-rays", "infrared rays", "visible rays", "ultra-violet rays"],
        "correct": 1
    },
    {
        "question": "Which of the following fuel is different from others ?",
        "options": ["Alcohol", "Lignite", "Coke", "Charcoal"],
        "correct": 0
    },
    {
        "question": "Which of the following causes the least pollution when burnt ?",
        "options": ["Natural Gas", "Diesel", "Coal", "Petrol"],
        "correct": 0
    },
    {
        "question": "Which of the following is a better nuclear fuel ?",
        "options": ["Plutonium-239", "Uranium-235", "Neptunium-239", "Thorium-236"],
        "correct": 0
    },
    {
        "question": "The energy released per unit mass is—",
        "options": ["varies from time to time", "more for fission than for fusion", "equal for both fusion of fission", "more for fusion than for fission"],
        "correct": 3
    },
    {
        "question": "The mass of Jupiter compared to Earth taken as 1 is—",
        "options": ["0.8", "195", "95", "318"],
        "correct": 3
    },
    {
        "question": "Which of the following planets has the least number of satellites ?",
        "options": ["Earth", "Uranus", "Mars", "Neptune"],
        "correct": 0
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
