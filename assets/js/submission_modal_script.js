console.log("SUBMISSION Modal script loaded");

// SUBMISSION MODAL 
document.addEventListener('DOMContentLoaded', handleSubmitModal)

    function handleSubmitModal() {
        const submitModal = document.getElementById("submit-modal");
        const submitbtn = document.getElementById("questionsBtn");
        const close = document.getElementsByClassName("close")[1];

        submitbtn.onclick = function () {
            submitModal.style.display = "block";
        };

        close.onclick = function () {
            submitModal.style.display = "none";
        };

        window.onclick = function (event) {
            if (event.target == submitModal) {
                submitModal.style.display = "none";
            }
        };
    }



    
