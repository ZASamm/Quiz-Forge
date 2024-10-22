// Each square will pop up the same modal with a different question.
// The different questions can be handled by a function called inside the modal.
// The modal function needs to receive the squareID to know which square is pressed 


function handleModal() {

const qModal = document.getElementById("qModal");
const squares = document.querySelectorAll(".square"); 
const close = document.getElementsByClassName("close")[0];

// Add click event to each square
squares.forEach(square => {
    square.addEventListener("click", function() {
        qModal.style.display = "block";


        // const squareID = this.id;   - Could set modal content like this
        // setModalContent(squareID);  - Call function that switches content based on id


    });
});

// add clcik event to close qModal
close.addEventListener("click", function() {
    qModal.style.display = "none";
});

}

// Close modal if clicking anywhere outsde of modal 

window.onclick = function(event) {
    if (event.target == qModal) {
        qModal.style.display = "none";
    }
};


document.addEventListener('DOMContentLoaded', handleModal);