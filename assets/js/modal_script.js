// Each square will pop up the same modal with a different question.
// The different questions can be handled by a function called inside the modal.
// The modal function needs to receive the squareID to know which square is pressed 

async function handleModal() {

    let filePaths = [
        'assets/questions/programming/js-questions-json.json',
        'assets/questions/programming/html-questions-json.json',
        'assets/questions/programming/css-questions-json.json'
    ];
    let possibleQuestions = await loadQuestionsFromFile(filePaths);
    console.log(possibleQuestions);
    console.log(possibleQuestions.length);
    // console.log(possibleQuestions[0]);
    // console.log(typeof(possibleQuestions));

    let questions = generateQuestionSet(9, possibleQuestions);
    console.log(questions);

    const qModal = document.getElementById("qModal");
    const squares = document.querySelectorAll(".square");
    const close = document.getElementsByClassName("close")[0];

    // Add click event to each square
    for (let index = 0; index < squares.length; index++) {
        const square = squares[index];
        square.setAttribute("squareIndex", index);
        square.addEventListener("click", function () {

            loadQuestion(square.getAttribute("squareIndex"), qModal);

            qModal.style.display = "block";


            // const squareID = this.id;   - Could set modal content like this
            // setModalContent(squareID);  - Call function that switches content based on id
        });
    }

    // add click event to close qModal
    close.addEventListener("click", function () {
        qModal.style.display = "none";
    });

}

// Close modal if clicking anywhere outsde of modal 

window.onclick = function (event) {
    if (event.target == qModal) {
        qModal.style.display = "none";
    }
};


document.addEventListener('DOMContentLoaded', handleModal);

function generateQuestionList() {
    let questionList = [];
    return questionList;
}

function loadQuestion(squareIndex, modal) {
    //alert(`Question ${square} Clicked`);
    let modalContent = document.querySelector(".modal-content");
    document.querySelector(".category").innerHTML = `Question ${Number(squareIndex) + 1}`;
    document.querySelector(".questionSection").innerHTML = `What is Lorum Ipsum?`;
    document.querySelector(".answerSection").innerHTML = `
    <button class="answer-button">Answer 1</button>
    <button class="answer-button">Answer 2</button>
    <button class="answer-button">Answer 3</button>
    <button class="answer-button">Answer 4</button>
    `;
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