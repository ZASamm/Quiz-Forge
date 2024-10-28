// Each square will pop up the same modal with a different question.
// The different questions can be handled by a function called inside the modal.
// The modal function needs to receive the squareID to know which square is pressed

let questions = [];

async function handleModal() {
    let filePaths = [
        'assets/questions/programming/js-questions-json.json',
        'assets/questions/programming/html-questions-json.json',
        'assets/questions/programming/css-questions-json.json'
    ];
    let possibleQuestions = await loadQuestionsFromFile(filePaths);

    questions = generateQuestionSet(9, possibleQuestions);


    const qModal = document.getElementById("qModal");
    const squares = document.querySelectorAll(".square");
    const close = document.getElementsByClassName("close")[0];
    const scanLines = document.getElementById("screen_scanlines")
    const clickSound = document.getElementById("click-sound")
    const closeSound = document.getElementById("close-beep-sound")

    // Unhide Modal
    let gameboard = document.querySelector(".zs_folder_row");
    gameboard.classList.remove("GC-hidden");

    // Add click event to each square
    for (let index = 0; index < squares.length; index++) {
        const square = squares[index];
        square.setAttribute("squareIndex", index);
        square.addEventListener("click", function () {
            position = index;
            updateBoard(squares);
            if (squareUnanswered(square)) {
                loadQuestion(square.getAttribute("squareIndex"), qModal);

                qModal.style.display = "block";
                scanLines.classList.add("translucent")
                console.log(scanLines.classList)
                if (soundOn) {
                    clickSound.play()
                }
            };

            // const squareID = this.id;   - Could set modal content like this
            // setModalContent(squareID);  - Call function that switches content based on id
        });
    }

    document.addEventListener("keydown", function (event) {
        if (qModal.style.display === "block" && event.key === "Escape") {
            if (soundOn) {
                closeSound.play()
            }
            qModal.style.display = "none";
            scanLines.classList.remove("translucent")
            
        }
        if (event.key === "Enter" && !(qModal.style.display === "block")) {
            let currentSquare = document.querySelector(".player-square");
            if (squareUnanswered(currentSquare)) {
                loadQuestion(currentSquare.getAttribute("squareIndex"), qModal);
                qModal.style.display = "block";
                scanLines.classList.add("translucent")
                if (soundOn) {
                    clickSound.play()
                }
                console.log(`Loading current square ${currentSquare}`);
            };
        }
    });

    // add click event to close qModal
    close.addEventListener("click", function () {
        if (soundOn) {
            closeSound.play()
        }
        qModal.style.display = "none";
        scanLines.classList.remove("translucent")
    });

}

// Close modal if clicking anywhere outsde of modal 

window.onclick = function (event) {
    scanLines = document.getElementById("screen_scanlines")
    if (event.target == qModal) {
        document.getElementById("close-beep-sound").play()
        qModal.style.display = "none";
        scanLines.classList.remove("translucent")
    }
};


//document.addEventListener('DOMContentLoaded', handleModal);

function generateQuestionList() {
    let questionList = [];
    return questionList;
}


function loadQuestion(squareIndex, modal) {
    //alert(`Question ${square} Clicked`);
    let question = questions[squareIndex];
    let modalContent = document.querySelector(".modal-content");
    document.querySelector(".category").innerHTML = `Question ${Number(squareIndex) + 1}`;

    let questionString = question.question;
    questionString = questionString.replaceAll("<", "&lt;");
    questionString = questionString.replaceAll(">", "&gt;");
    document.querySelector(".questionSection").innerHTML = `${questionString}`;

    document.querySelector(".answerSection").innerHTML = "";

    switch (question.type) {
        case 'multiple':
            // missing on click event handler, to be added later.
            let possibleAnswers = [];
            possibleAnswers = possibleAnswers.concat(question.incorrect_answers);
            possibleAnswers.push(question.correct_answer);
            possibleAnswers = shuffle(possibleAnswers);
            let htmlString = '';
            for (let answer of possibleAnswers) {
                answer = answer.replaceAll("<", "&lt;");
                answer = answer.replaceAll(">", "&gt;");
                htmlString = htmlString + `<button class="answer-button">${answer}</button>`
            };
            document.querySelector(".answerSection").innerHTML = htmlString;

            // Add Event Listeners
            let buttons = document.getElementsByClassName("answer-button");
            let correctIndex = possibleAnswers.indexOf(question.correct_answer);
            for (let index = 0; index < buttons.length; index++) {
                buttons[index].addEventListener("click", function (event) {
                    multipleAnswer(event, buttons, index, correctIndex, squareIndex)
                });
            }
            break;
        case 'boolean':
            // missing on click event handler, to be added later.
            document.querySelector(".answerSection").innerHTML = `
            <button class="boolean-button">True</button>
            <button class="boolean-button">False</button>
            `;

            // Add Event Listeners
            let boolButtons = document.getElementsByClassName("boolean-button");
            for (let index = 0; index < boolButtons.length; index++) {
                boolButtons[index].addEventListener("click", function (event) {
                    boolAnswer(event, boolButtons, index, question.correct_answer, squareIndex);
                });
            }
            break;
        case 'text':
            // missing on click event handler, to be added later.
            document.querySelector(".answerSection").innerHTML = `
            <input type="text" class="text-input">
            <button class="text-submit-button">Answer</button>
            `;

            // Add Event Listener
            let submitButton = document.querySelector(".text-submit-button");
            let textField = document.querySelector(".text-input");
            submitButton.addEventListener("click", function (event) {
                textAnswer(event, textField, submitButton, question.correct_answers, squareIndex)
            });
            break;
        default:
            alert(`${question.type} is an unsupported or invalid question type`);
    }
}


/**
 * Function gets an array of questions from the given JSON files.
 * @param {Array} Array of file paths.
 * @returns A list of question objects.
 */
async function loadQuestionsFromFile(filePaths) {
    var questions = [];
    var testQuestions = new Array();
    let count = 0;
    for (let path of filePaths) {
        await fetch(path)
            .then(response => response.json())
            .then(data => {
                for (let index = 0; index < data.length; index++) {
                    const question = data[index];
                    questions.push(question);
                    count++
                }
            })
            .catch(error => {
                console.error('Error loading JSON file:', error);
            });
    }
    return (questions);
}


/**
 * Function that generates a random list of questions.
 * @param {Number} numberOfQuestions
 * @param {Array} sourceQuestions 
 * @returns {Array} List of random questions.
 */
function generateQuestionSet(numberOfQuestions, sourceQuestions) {
    if (numberOfQuestions > sourceQuestions.length) {
        return [];
    } else {
        let listOfQuestions = [];
        let questionNumbers = [];

        while (questionNumbers.length < numberOfQuestions) {

            // Generate a new number between 0 and the length of the source questions array.
            let number = Math.floor(Math.random() * sourceQuestions.length);
            // If that number is not already in the questionNumbers array, add it to the question numbers array.
            if (!(questionNumbers.includes(number))) {
                questionNumbers.push(number);
                // Also, add that question index to the listOfQuestions array.
                listOfQuestions.push(sourceQuestions[number]);
            }
        }
        return listOfQuestions;
    }
}

/**
 * This function shuffles an array.
 * from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * @param { Array } unrandomised array input
 * @returns { Array } randomised array
 */
function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    };
    return array;
};

/**
 * Cleans a string of html so it can display in html.
 * @param {string} Input String Unsanitized
 * @returns Output String Santized
 */
function htmlCleanString(inputString) {
    let outputString = inputString.replaceAll("<", "&lt;");
    outputString = outputString.replaceAll(">", "&gt;");
    return outputString;
}


/**
 * Function that handles multiple choice answer click event.
 * @param { Event } event 
 * @param { HTMLElementCollection } buttons 
 * @param { Number } buttonIndex 
 * @param { Number } correctIndex 
 */
function multipleAnswer(event, buttons, buttonIndex, correctIndex, squareIndex) {
    if (!(buttons[buttonIndex].classList.contains("question-answered"))) {
        if (buttonIndex == correctIndex) {
            buttons[buttonIndex].classList.add("correct-answer");
            console.log("Correct!");
            handleAnswer(squareIndex, true);
        } else {
            buttons[buttonIndex].classList.add("incorrect-answer");
            buttons[correctIndex].classList.add("correct-answer");
            console.log("Incorrect!");
            handleAnswer(squareIndex, false);
        }
        for (let index = 0; index < buttons.length; index++) {
            buttons[index].classList.add("question-answered");
        }
    }
};

/**
 * Function that handles bool answer click event.
 * @param { Event } event 
 * @param { HTMLElementCollection } buttons 
 * @param { Number } buttonIndex 
 * @param { Boolean } correctAnswer 
 */
function boolAnswer(event, buttons, buttonIndex, correctAnswer, squareIndex) {
    if (!(buttons[buttonIndex].classList.contains("question-answered"))) {
        if (buttons[buttonIndex].innerHTML === correctAnswer) {
            buttons[buttonIndex].classList.add("correct-answer");
            console.log("Correct!");
            handleAnswer(squareIndex, true);
        } else {
            buttons[buttonIndex].classList.add("incorrect-answer");
            if (buttonIndex === 1) {
                buttons[0].classList.add("correct-answer");
            } else {
                buttons[1].classList.add("correct-answer");
            }
            console.log("Incorrect!");
            handleAnswer(squareIndex, false);
        }
        for (let index = 0; index < buttons.length; index++) {
            buttons[index].classList.add("question-answered");
        }
    }
}

/**
 * Function that handles text answer click event.
 * @param { Event } event 
 * @param { HTMLInputElement } textField 
 * @param { HTMLButtonElement } submitButton 
 * @param { String } correctAnswer 
 */
function textAnswer(event, textField, submitButton, correctAnswer, squareIndex) {
    if (!(submitButton.classList.contains("question-answered"))) {
        if (correctAnswer.includes(textField.value)) {
            console.log("Correct!");
            handleAnswer(squareIndex, true);
            submitButton.classList.add("correct-answer");
        } else {
            console.log("Incorrect!");
            handleAnswer(squareIndex, false);
            submitButton.classList.add("incorrect-answer");
        }
        submitButton.classList.add("question-answered");
    }
}