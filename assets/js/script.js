let position = 0;

document.addEventListener('DOMContentLoaded', function () {
    const beep = document.getElementById("beep-sound")

    movePlayer(0, getSquares());

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
            if (soundOn) {
                beep.play()
                beep.currentTime = 0;
            }
            let squares = getSquares();
            event.preventDefault();
            // setCorrectSquare(positon, squares);
            position = (position + 1) % squares.length;
            // movePlayer(positon, squares);
        }
        if (event.key === 'ArrowLeft') {
            if (soundOn) {
                beep.play()
                beep.currentTime = 0;
            }
            let squares = getSquares();
            event.preventDefault();
            // setIncorrectSquare(positon, squares);
            if (position === 0) {
                position = squares.length - 1;
            } else {
                position--
            }
            //movePlayer(positon, squares);
        }
        updateBoard();
    });
});

/**
 * gets squares from the DOM
 * @returns array
 */
function getSquares() {
    sq = document.getElementsByClassName('square');
    return sq;
}

/**
 * takes an index and array then 'moves' the player by adding a class to change the 
 * colour of the square at the players location.
 */
function movePlayer(index, squares) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.remove('player-square');
    }
    clearSquare(index, squares);
    squares[index].classList.add('player-square');
}


/**
 * clears the board 
 */
function clearBoard(squares) {
    for (let i = 0; i < squares.length; i++) {
        clearSquare(i, squares);
    }
}

function clearSquare(index, squares) {
    squares[index].classList.remove('incorrect-square');
    squares[index].classList.remove('correct-square');
    squares[index].classList.remove('player-square');
    squares[index].classList.remove("grayed");
}

/**
 * Adds correct-square class to square
 * @param {int} index 
 * @param {Array} squares 
 */
function setCorrectSquare(index, squares) {
    clearSquare(index, squares)
    squares[index].classList.add('correct-square');
}


/**
 * Adds incorrect-square class to square
 * @param {int} index 
 * @param {Array} squares 
 */
function setIncorrectSquare(index, squares) {
    clearSquare(index, squares)
    squares[index].classList.add('incorrect-square');
}

/**
 * Resets the board back to default values.
 */
function resetBoard() {
    let squares = getSquares();
    for (let i = 0; i < squares.length; i++) {
        clearSquare(i, squares);
        squares[i].classList.remove('answer-correct');
        squares[i].classList.remove('answer-incorrect');
    }
    squares[0].classList.add('player-square');
    position = 0;
    //questions=[];
};

/**
 * 
 * @param { Number } index index of square 
 * @param { Boolean } isCorrect whether the question was answered correctly or not
 */
function handleAnswer(index, isCorrect) {
    let squares = getSquares();
    if (isCorrect) {
        squares[index].classList.add("answer-correct");
    } else {
        squares[index].classList.add("answer-incorrect");
    };
    position = getNextSquare();
    updateBoard();
}

/**
 * Updates the board.
 */
function updateBoard() {
    let squares = getSquares();
    clearBoard(squares);
    if (position >= 0) {
        squares[position].classList.add("player-square");
        for (let index = 0; index < squares.length; index++) {
            const square = squares[index];
            if (square.classList.contains("answer-correct")) {
                if (square.classList.contains("player-square")) {
                    squares.classList.add("grayed");
                } else {
                    setCorrectSquare(index, squares);
                }
            } else if (square.classList.contains("answer-incorrect")) {
                if (square.classList.contains("player-square")) {
                    squares.classList.add("grayed");
                } else {
                    setIncorrectSquare(index, squares);
                }
            }
        }
    } else {
        alert("Quiz Completed");
    };
}

/**
 * Checks if the given gameboard is completed.
 * @param { Array } squares The Game Board 
 * @returns { Boolean }
 */
function checkBoard(squares) {
    let quizCompleted = true;

    for (let index = 0; index < squares.length; index++) {
        const square = squares[index];
        if (squareUnanswered(square)) {
            quizCompleted = false;
        }
    }
    return quizCompleted;
}

/**
 * Returns if the given square is completed or not.
 * @param { Element } square 
 * @returns { Boolean } isCompleted
 */
function squareUnanswered(square) {
    return !(square.classList.contains("answer-correct") || square.classList.contains("answer-incorrect"));
}

/**
 * Function gets the first unanswered square.
 * @returns { Number } square index, returns -1 if all squares are answered.
 */
function getNextSquare() {
    let nextSquare = -1;
    let squares = getSquares();
    for (let index = 0; index < squares.length; index++) {
        const square = squares[index];
        if (squareUnanswered(square)) {
            nextSquare = index;
            break;
        }
    }
    return nextSquare;
}

/**
 * Function gets the last unanswered square.
 * @returns { Number } square index, returns -1 if all squares are answered.
 */
function getPreviousSquare() {
    let previousSquare = -1;
    let squares = getSquares();
    for (let index = squares.length - 1; index >= 0; index--) {
        const square = squares[index];
        if (squareUnanswered(square)) {
            previousSquare = index;
            break;
        }
    }
    return previousSquare;
}