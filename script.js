const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question: "1. Кое е любимото животно на Nikolay Hristov?",
        imgSrc: "img/ku4ekotkahamster.png",
        choiceA: "Куче",
        choiceB: "Котка",
        choiceC: "Хамстер",
        correct: "A"
    }, {
        question: "2. Какво предпочита най-много Nikolay Hristov?",
        imgSrc: "img/po4iwka.png",
        choiceA: "Почивка на планина",
        choiceB: "Почивка на море",
        choiceC: "Да няма почивка",
        correct: "B"
    }, {
        question: "3. Коя е зодията на Nikolay Hristov?",
        imgSrc: "img/zodia.png",
        choiceA: "Лъв",
        choiceB: "Близнаци",
        choiceC: "Рак",
        correct: "C"
    }, {
        question: "4. Къде е роден Nikolay Hristov?",
        imgSrc: "img/bulgaria.png",
        choiceA: "София",
        choiceB: "Пловдив",
        choiceC: "Варна",
        correct: "B"
    }, {
        question: "5. Любимият предмет на Nikolay Hristov в училище е:",
        imgSrc: "img/school.png",
        choiceA: "Математика",
        choiceB: "Български",
        choiceC: "Физическо",
        correct: "C"
    }, {
        question: "6. Какво предпочита най-много Nikolay Hristov?",
        imgSrc: "img/cinema.png",
        choiceA: "Кино със семейството",
        choiceB: "Кино с приятели",
        choiceC: "Кино сам",
        correct: "B"
    }, {
        question: "7. Какво предпочита най-много Nikolay Hristov?",
        imgSrc: "img/tortasladoledshokolad.png",
        choiceA: "торта",
        choiceB: "сладолед",
        choiceC: "шоколад",
        correct: "C"
    }, {
        question: "8. Какво предпочита най-много Nikolay Hristov?",
        imgSrc: "img/soup.png",
        choiceA: "крем супа",
        choiceB: "селска супа",
        choiceC: "пилешка супа",
        correct: "C"
    }, {
        question: "9. Какво предпочита най-много Nikolay Hristov?",
        imgSrc: "img/sport.png",
        choiceA: "баскетбол",
        choiceB: "футбол",
        choiceC: "волейбол",
        correct: "B"
    }, {
        question: "10. Какво предпочита най-много Nikolay Hristov?",
        imgSrc: "img/girl.png",
        choiceA: "Момиче с дълга коса",
        choiceB: "Момиче с къса коса",
        choiceC: "Момче с дълга коса",
        correct: "A"
    }, {
        question: "11. Nikolay Hristov обича да прави игри:",
        imgSrc: "img/code.png",
        choiceA: "За забавление на себе си",
        choiceB: "За пари",
        choiceC: "За забавление на другите хора",
        correct: "C"
    }, {
        question: "12. Коя е любимата игра на Nikolay Hristov?",
        imgSrc: "img/game.png",
        choiceA: "MINECRAFT",
        choiceB: "FORTNITE",
        choiceC: "FIFA",
        correct: "A"
    }, {
        question: "13. Nikolay Hristov може да:",
        imgSrc: "img/music.png",
        choiceA: "Пее",
        choiceB: "Свири на китара",
        choiceC: "Свири на барабани",
        correct: "C"
    }, {
        question: "14. Nikolay Hristov иска да стане:",
        imgSrc: "img/profesii.png",
        choiceA: "Програмист",
        choiceB: "Полицай",
        choiceC: "Музикант",
        correct: "A"
    }, {
        question: "15. Кое смяна предпочита повече Nikolay Hristov в училище?",
        imgSrc: "img/school.png",
        choiceA: "Първа смяна",
        choiceB: "Втора смяна",
        choiceC: "Все тая му е коя смяна",
        correct: "A"
    }, {
        question: "16. Кой е любимият футболист на Nikolay Hristov?",
        imgSrc: "img/footbal.png",
        choiceA: "Lionel Messi",
        choiceB: "Cristiano Ronaldo",
        choiceC: "Ter Stegen",
        correct: "C"
    }, {
        question: "17. Кой е любимият youtuber на Nikolay Hristov?",
        imgSrc: "img/youtube.png",
        choiceA: "MrBeast",
        choiceB: "Alan Becker",
        choiceC: "PewDiePie",
        correct: "B"
    }, {
        question: "18. Кое предпочита най-много Nikolay Hristov?",
        imgSrc: "img/kolev.png",
        choiceA: "Училище",
        choiceB: "Колеж",
        choiceC: "Нито едно",
        correct: "B"
    }, {
        question: "19. Какви очи има Nikolay Hristov?",
        imgSrc: "img/eye.png",
        choiceA: "Зелени",
        choiceB: "Кафяви",
        choiceC: "Сини",
        correct: "A"
    }, {
        question: "20. Коя е първата игра хакната от Nikolay Hristov?",
        imgSrc: "img/game.png",
        choiceA: "Dino Chrome",
        choiceB: "Snake Chrome",
        choiceC: "Не е хаквал никаква игра",
        correct: "A"
    }, {
        question: "21. Кое предпочита повече Nikolay Hristov?",
        imgSrc: "img/dream.png",
        choiceA: "Dream",
        choiceB: "Technoblade",
        choiceC: "Нито един",
        correct: "B"
    }, {
        question: "22. Кое предпочита най-много Nikolay Hristov?",
        imgSrc: "img/pitie.png",
        choiceA: "Водка",
        choiceB: "Бира",
        choiceC: "Ракия",
        correct: "B"
    }, {
        question: "23. По колко часа на ден спи Nikolay Hristov?",
        imgSrc: "img/spane.png",
        choiceA: "5-6 часа",
        choiceB: "7-8 часа",
        choiceC: "10-11 часа",
        correct: "B"
    }, {
        question: "24. Как се казва най-добрият ми приятел?",
        imgSrc: "img/bff.png",
        choiceA: "Христо",
        choiceB: "Иван",
        choiceC: "Данаил",
        correct: "A"
    }, {
        question: "25. Колко баби и дядовци има Nikolay Hristov?",
        imgSrc: "img/dqdo.png",
        choiceA: "Две баби и двама дядовци",
        choiceB: "Три баби и един дядо",
        choiceC: "Една баба и двама дядовци",
        correct: "B"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

// counter render

function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;
        // change progress color to red
        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    } else {
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender() {
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score / questions.length);

    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
        (scorePerCent >= 60) ? "img/4.png" :
            (scorePerCent >= 40) ? "img/3.png" :
                (scorePerCent >= 20) ? "img/2.png" :
                    "img/1.png";

    scoreDiv.innerHTML = "<img src=" + img + ">";
    scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}