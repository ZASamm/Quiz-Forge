// Audio state
let soundOn = false;

document.addEventListener("DOMContentLoaded", () => {
    const soundBtn = document.getElementById('soundBtn');
    
    // Set initial mute state
    document.querySelectorAll('audio').forEach(audio => {
        audio.muted = true;
    });

    // Only handle direct clicks on the sound button
    soundBtn.addEventListener("click", (event) => {
        // Stop the event from bubbling up
        event.stopPropagation();
        
        // Only toggle if it's a direct click on the button
        if (event.target === soundBtn || event.target.parentElement === soundBtn) {
            soundOn = !soundOn;
            console.log('Sound toggled by button:', soundOn);
            
            if (soundOn) {
                soundBtn.classList.remove("grayed");
            } else {
                soundBtn.classList.add("grayed");
            }

            document.querySelectorAll('audio').forEach(audio => {
                audio.muted = !soundOn;
            });
        }
    });
});