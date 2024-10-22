
document.addEventListener('DOMContentLoaded', function(){
    let position = 0
    movePlayer(0, getSquares());
    document.addEventListener('keydown',function(event){ 
        if(event.key === 'ArrowRight'){
            let squares = getSquares();
            event.preventDefault();
            position = (position + 1)%squares.length;
            movePlayer(position, squares);
            
        }
        if(event.key === 'ArrowLeft'){
            let squares = getSquares();
            event.preventDefault();
            if(position === 0){
                position = squares.length -1;
            } else {
                position--
            }
            movePlayer(position, squares);
        }
    });
  });
  
  function getSquares(){
    sq = document.getElementsByClassName('square');
    return sq;
  }
  
  function movePlayer(index, squares){
    for(let i=0; i<squares.length; i++){
        squares[i].classList.remove('player-square');
    }
    squares[index].classList.add('player-square');
  }