// document.addEventListener("DOMContentLoaded", () => {
//     initAudio()
//     setUpAudioEventListeners()

// })

// function initAudio() {
//     const soundBtn = document.getElementById('soundBtn')
    


//     let soundOn = false;  
//     soundOn = !soundOn; 
    
//     // Update all audio elements
//     document.querySelectorAll('audio').forEach(audio => {
//         audio.muted = !soundOn;
//     });
    
//     // Update button class
//     soundBtn.addEventListener("click", (e) => {
//         e.target.classList.toggle("audio-on")
//         console.log(soundBtn)

//     })
    
// }

// // Set all audio to muted when page loads
// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelectorAll('audio').forEach(audio => {
//         audio.muted = true;
//     });
// });

// function setUpAudioEventListeners() {
//     const beep = document.getElementById("beep-sound");
    
//     document.addEventListener('keydown', function(event) {
//         if(event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
//             beep.play();
//         }
//     });
// } 
    
