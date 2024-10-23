console.log("SUBMISSION Modal script loaded");

document.addEventListener('DOMContentLoaded', () => {
    handleSubmitModal();
    handleQuestionForm();
    handleDisplayModal();
    displayQuestions();




});

// SUBMISSION MODAL 


function handleSubmitModal() {
    const submitModal = document.getElementById("submit-modal");
    const submitbtn = document.getElementById("questionsBtn");
    const close = document.getElementsByClassName("close")[1];

    submitbtn.addEventListener('click', function () {
        submitModal.style.display = "block";
    });

    close.addEventListener('click', function () {
        submitModal.style.display = "none";
    });

    window.addEventListener('click', function (e) {
        if (e.target == submitModal) {
            submitModal.style.display = "none";
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

    typeSelect.addEventListener('change', function () {  // "change" here is the event for when the user changes the question type

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


                document.getElementById('trueOrFalse').style.display = 'block';  
                break;
        }
    });


    // THIS IS AI ASSISTED CODE - HEAVILY COMMENTED SO I CAN LEARN HOW TO DO THIS WITHOUT ASSISTANCE-----------------------------------


    // PSEUDO CODE FOR FORM SUBMISSION
    // on submit prevent default refresh. 
    // Then create a new question object with basic properties.
    // handle specific question type requirements - if multiple choice, collect all incorrect answers. If text, collect all possible correct answers.
    // try to get existing questions from local storage, if none exist use an empty array.
    // add the new question to our array.
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
                .map(input => input.value)      // Extract just the values
                .filter(value => value !== '');  // Remove any empty values
        }
        else if (newQuestion.type === 'text') {
            // For text questions: collect all possible correct answers
            newQuestion.correct_answers = [
                newQuestion.correct_answer,  // Include the main correct answer
                ...Array.from(document.getElementsByClassName('alternate_answer'))  // Get alternate answers (... is spread - so instead of storing array within array it stores as multiple one levl arrays)
                    .map(input => input.value)      // Extract values
                    .filter(value => value !== '')  // Remove empty values
            ];
            delete newQuestion.correct_answer;  // Remove the single correct_answer property
        }

        try {
            // Try to get existing questions from localStorage
            // If none exist, use an empty array ('[]')
            let customQuestions = JSON.parse(localStorage.getItem('customQuestions') || '[]');

            // Add the new question to our array
            customQuestions.push(newQuestion);

            // Save the updated array back to localStorage
            // JSON.stringify converts our array to a string (required for localStorage)
            localStorage.setItem('customQuestions', JSON.stringify(customQuestions));

            // Log success and give user feedback
            console.log('Question saved to localStorage:', newQuestion);
            form.reset();  // Clear the form
            alert('Question saved successfully!');
        }
        catch (error) {
            // If anything goes wrong, show error messages
            console.error('Error saving question:', error);
            alert('Error saving question. Please check the console for details.');
        }
    });

}
// -----------------------------END OF AI CODE--------------------------------



// THIS IS HOW TO GET CUSTOM QUESTIONS FROM LOCAL STORAGE -----------------------------------------------------
function getCustomQuestions() {
    const questions = localStorage.getItem('customQuestions');
    return questions ? JSON.parse(questions) : [];  // Return parsed questions or empty array if none exist
}

// ----------------------------------------------------------------------------------------------------------

// DISPLAY QUESTIONS MODAL -- Just for testing local cache retrieval


function handleDisplayModal() {
    console.log('handleDisplayModal function called');
    const displayModal = document.getElementById("display-modal");
    const displayBtn = document.getElementById("displayQuestionsBtn");
    const closeDisplay = document.getElementsByClassName("close")[1];

    console.log('displayModal:', displayModal);
    console.log('displayBtn:', displayBtn);
    console.log('closeDisplay:', closeDisplay);

    displayBtn.addEventListener('click', function () {
        console.log('Display button clicked');
        displayModal.style.display = "block";
        displayQuestions();
    });

    closeDisplay.addEventListener('click', function () {
        console.log('Close display button clicked');
        displayModal.style.display = "none";
    });

    window.addEventListener('click', function (event) {
        if (event.target == displayModal) {
            console.log('Clicked outside display modal');
            displayModal.style.display = "none";
        }
    });
}



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
                <h3>Question ${index + 1}</h3>
                <p><strong>Type:</strong> ${question.type}</p>
                <p><strong>Difficulty:</strong> ${question.difficulty}</p>
                <p><strong>Category:</strong> ${question.category}</p>
                <p><strong>Question:</strong> ${question.question}</p>
                <p><strong>Correct Answer:</strong> ${question.correct_answer || question.correct_answers.join(", ")}</p>
                ${question.incorrect_answers ? `<p><strong>Incorrect Answers:</strong> ${question.incorrect_answers.join(", ")}</p>` : ""}
            </div>
        `;
    });

    questionsContainer.innerHTML = questionsHTML;
}
