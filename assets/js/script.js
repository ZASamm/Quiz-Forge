
let positon = 0;

document.addEventListener('DOMContentLoaded', function(){
    const beep = document.getElementById("beep-sound")
    
    movePlayer(0, getSquares());

    document.addEventListener('keydown',function(event){ 
        if(event.key === 'ArrowRight'){
            if(soundOn){
                beep.play()
                beep.currentTime = 0;}
            let squares = getSquares();
            event.preventDefault();
            // setCorrectSquare(positon, squares);
            positon = (positon + 1)%squares.length;
            movePlayer(positon, squares);
        }
        if(event.key === 'ArrowLeft'){
            if(soundOn){
            beep.play()
            beep.currentTime = 0;}
            let squares = getSquares();
            event.preventDefault();
            // setIncorrectSquare(positon, squares);
            if(positon === 0){
                positon = squares.length -1;
            } else {
                positon--
            }
            movePlayer(positon, squares);
        }
    });
});

/**
 * gets squares from the DOM
 * @returns array
 */
function getSquares(){
    sq = document.getElementsByClassName('square');
    return sq;
}

/**
 * takes an index and array then 'moves' the player by adding a class to change the 
 * colour of the square at the players location.
 */
function movePlayer(index, squares){
    for(let i=0; i<squares.length; i++){
        squares[i].classList.remove('player-square');
    }
    clearSquare(index, squares);
    squares[index].classList.add('player-square');
}


/**
 * clears the board 
 */
function clearBoard(squares){
    for(let i=0; i<squares.length; i++){
        clearSquare(i, squares);
    }
}

function clearSquare(index, squares){
    squares[index].classList.remove('incorrect-square');
    squares[index].classList.remove('correct-square');
    squares[index].classList.remove('player-square');
}

/**
 * Adds correct-square class to square
 * @param {int} index 
 * @param {Array} squares 
 */
function setCorrectSquare(index, squares){
    clearSquare(index, squares)
    squares[index].classList.add('correct-square');
}


/**
 * Adds incorrect-square class to square
 * @param {int} index 
 * @param {Array} squares 
 */
function setIncorrectSquare(index, squares){
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
    positon = 0;
    //questions=[];
};

/**
 * 
 * @param { Number } index index of square 
 * @param { Boolean } isCorrect whether the question was answered correctly or not
 */
function handleAnswer(index, isCorrect) {
    let squares = getSquares();
    if(isCorrect){
        squares[index].classList.add("answer-correct");
    } else {
        squares[index].classList.add("answer-incorrect");
    };
}