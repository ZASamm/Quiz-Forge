console.log("SUBMISSION Modal script loaded");

document.addEventListener('DOMContentLoaded', () => {
    handleSubmitModal();
    handleQuestionForm();
    handleDisplayModal();
    displayQuestions();
    handleAboutModal();
    deleteQuestion();

});

// SUBMISSION MODAL 


function handleSubmitModal() {
    const submitModal = document.getElementById("submit-modal");
    const submitbtn = document.getElementById("questionsBtn");
    const close = document.getElementsByClassName("close")[1];
    const scanLines = document.getElementById("screen_scanlines")
    const clickSound = document.getElementById("click-sound")
    const closeSound = document.getElementById("close-beep-sound")

    console.log(scanLines)

    submitbtn.addEventListener('click', function () {
        clickSound.play()
        submitModal.style.display = "block";
        scanLines.classList.add("translucent")
    });

    close.addEventListener('click', function () {
        closeSound.play()
        submitModal.style.display = "none";
        scanLines.classList.remove("translucent")
    });

    window.addEventListener('click', function (e) {
        if (e.target == submitModal) {
            closeSound.play()
            submitModal.style.display = "none";
            scanLines.classList.remove("translucent")
        }
    });
}


// QUESTION FORM

/**
 * This function handles the display of the question form for different question types and the submission of questions to local storage
 */

function handleQuestionForm() {
    const form = document.getElementById('addQuestionForm');
    const typeSelect = document.getElementById('type');
    const incorrectAnswersSection = document.getElementById('incorrectAnswersSection');
    const alternateAnswersSection = document.getElementById('alternateAnswersSection');
    const saveSound = document.getElementById("disk-sound")
    const qSavedNotice = document.getElementById("qSaved")

    typeSelect.addEventListener('change', function () { // "change" here is the event for when the user changes the question type

        // Use a switch statement to handle different question types
        // "this" refers to the element that triggered the event.
        switch (this.value) {
            case 'multiple':
                incorrectAnswersSection.style.display = 'block';
                alternateAnswersSection.style.display = 'none';
                break;

            case 'text':
                incorrectAnswersSection.style.display = 'none';
                alternateAnswersSection.style.display = 'block';
                break;

            case 'boolean':
                incorrectAnswersSection.style.display = 'none';
                alternateAnswersSection.style.display = 'none';
                break;
        }
    });


    // THIS CODE WITHIN THIS BLOCK IS AI ASSISTED - I UNDERSTAND ALMOST ALL OF IT :) -GUY  ------------------------------


    // PSEUDO CODE FOR FORM SUBMISSION
    // on submit prevent default refresh. 
    // Then create a new question object with basic properties so we can handle the local storage more easily.
    // Handle specific question type requirements - if multiple choice, collect all incorrect answers. If text, collect all possible correct answers.
    // Try to get existing questions from local storage, if none exist use an empty array.
    // Add the new question (newQuestion) to our array (customQuesions)
    // save the updated array back to local storage.

    // Handle form submission
    // on submit prevent default refresh. 
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Create a new question object with basic properties  This makes it easier to handle the data when it's retrieved from local storage - 
        const newQuestion = {
            type: typeSelect.value,
            difficulty: document.getElementById('difficulty').value,
            category: document.getElementById('category').value,
            question: document.getElementById('question').value,
            correct_answer: document.getElementById('correct_answer').value
        };

        // Handle specific question type requirements
        if (newQuestion.type === 'multiple') {
            // For multiple choice: collect all incorrect answers
            newQuestion.incorrect_answers = Array.from(document.getElementsByClassName('incorrect_answer')) // creates the incorrect answers array from the all of the incorrect answer input fields
                // Get all incorrect answer inputs
                .map(input => input.value) // Extract just the values
                .filter(value => value !== ''); // Remove any empty values
        } else if (newQuestion.type === 'text') {
            // For text questions: collect all possible correct answers
            newQuestion.correct_answers = [
                newQuestion.correct_answer, // Include the main correct answer
                ...Array.from(document.getElementsByClassName('alternate_answer')) // Get alternate answers (... is spread - so instead of storing array within array it stores as multiple one levl arrays)
                .map(input => input.value) // Extract values
                .filter(value => value !== '') // Remove empty values
            ];
            delete newQuestion.correct_answer; // Remove the single correct_answer property
        }

        // SAVE TO LOCAL STORAGE

        try {
            // Try to get existing questions from localStorage
            // If none exist, use an empty array ('[]')
            let customQuestions = JSON.parse(localStorage.getItem('customQuestions') || '[]');

            // Add the new question to the array
            customQuestions.push(newQuestion);

            // Save the updated array back to localStorage
            // JSON.stringify converts the array to a string (required for localStorage)
            localStorage.setItem('customQuestions', JSON.stringify(customQuestions));


            console.log('Question saved to localStorage:', newQuestion);
            qSavedNotice.classList.remove("GC-hidden")
            saveSound.play() // play save sound
            setTimeout(() => {
                qSavedNotice.classList.add("GC-hidden");
            }, 1500);


            form.reset();

            displayQuestions(); // update question display - this fixes the page needing refresh
        } catch (error) {

            console.error('Error saving question:', error);
            alert('Error saving question. Please check the console for details.');
        }
    });

}
// -----------------------------END OF AI ASSISTED CODE--------------------------------



// THIS IS HOW TO GET CUSTOM QUESTIONS FROM LOCAL STORAGE -----------------------------------------------------
function getCustomQuestions() {
    const questions = localStorage.getItem('customQuestions');
    return questions ? JSON.parse(questions) : []; // Return parsed questions or empty array if none exist
}

// ----------------------------------------------------------------------------------------------------------

// DISPLAY CUSTOM QUESTIONS MODAL -- Just for testing local cache retrieval (Now a feature)

function handleDisplayModal() {
    const displayModal = document.getElementById("display-modal");
    const displayBtn = document.getElementById("display-questions-btn");
    const close = document.getElementsByClassName("close")[2];
    const scanLines = document.getElementById("screen_scanlines")
    const clickSound = document.getElementById("click-sound")
    const closeSound = document.getElementById("close-beep-sound")

    displayBtn.addEventListener('click', function () {
        clickSound.play()
        displayModal.style.display = "block";
        scanLines.classList.add("translucent")
    });

    close.addEventListener('click', function () {
        closeSound.play()
        displayModal.style.display = "none";
        scanLines.classList.remove("translucent")
    });

    window.addEventListener('click', function (e) {
        if (e.target == displayModal) {
            closeSound.play()
            displayModal.style.display = "none";
            scanLines.classList.remove("translucent")
        }
    });
}

// DISPLAY QUESTIONS FUNCTION

function displayQuestions() {
    const questionsContainer = document.getElementById("questionsContainer");
    const questions = getCustomQuestions();


    if (questions.length === 0) {
        questionsContainer.innerHTML = "<p>No questions added yet.</p>";
        return;
    }

    let questionsHTML = "";
    questions.forEach((question, index) => {
        questionsHTML += `
            <div class="question">
                <h3 class="mb-3">Question ${index + 1}</h3>
                <p><strong>Type:</strong> ${question.type}</p>
                <p><strong>Difficulty:</strong> ${question.difficulty}</p>
                <p><strong>Category:</strong> ${question.category}</p>
                <p><strong>Question:</strong> ${question.question}</p>
                <p><strong>Correct Answer:</strong> ${question.correct_answer || question.correct_answers.join(", ")}</p>
                ${question.incorrect_answers ? `<p><strong>Incorrect Answers:</strong> ${question.incorrect_answers.join(", ")}</p>` : ""} 
            </div>
            <button type="button" id="${index}" class="btn btn-menu delete-btn mb-4">Delete question</button> 
            
        `;
    }); // storing question index as delete buttin ID so i can use it to delete the correct question.

    questionsContainer.innerHTML = questionsHTML;
}

// DELETE QUESTION

function deleteQuestion() {

    const questionsContainer = document.getElementById("questionsContainer");
    const deleteSound = document.getElementById("delete-sound")

    // Add event delegation to handle all delete buttons
    questionsContainer.addEventListener('click', function (e) {
        // Check if the clicked element is a delete button
        if (e.target.classList.contains('delete-btn')) {
            const qIndex = parseInt(e.target.id); // Parsed into an integer as the index comes back as a string from html

            try {
                let questions = JSON.parse(localStorage.getItem('customQuestions') || '[]');
                questions.splice(qIndex, 1);
                localStorage.setItem('customQuestions', JSON.stringify(questions));
                // Call display questions again to refresh modal
                displayQuestions();
                deleteSound.play()
                console.log(deleteSound.play())

            } catch (error) {
                console.error('Error deleting question:', error);

            }
        }
    });
}

// ABOUT MODAL

function handleAboutModal() {
    const aboutModal = document.getElementById("aModal");
    const aboutbtn = document.getElementById("about");
    const close = document.getElementsByClassName("close")[3];
    const scanLines = document.getElementById("screen_scanlines")
    const clickSound = document.getElementById("click-sound")
    const closeSound = document.getElementById("close-beep-sound")

    aboutbtn.addEventListener('click', function (e) {
        clickSound.play()
        aboutModal.style.display = "block";
        scanLines.classList.add("translucent")
        console.log(e)

    });

    close.addEventListener('click', function () {
        closeSound.play()
        aboutModal.style.display = "none";
        scanLines.classList.remove("translucent")
    });

    window.addEventListener('click', function (e) {
        if (e.target == aboutModal) {
            closeSound.play()
            aboutModal.style.display = "none";
            scanLines.classList.remove("translucent")
        }
    });
}