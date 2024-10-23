console.log("SUBMISSION Modal script loaded");

document.addEventListener('DOMContentLoaded', () => {
    handleSubmitModal();
    



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



    
