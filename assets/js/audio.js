let soundOn = false;

document.addEventListener("DOMContentLoaded", () => {
    const soundBtn = document.getElementById('soundBtn');



    document.querySelectorAll('audio').forEach(audio => {
        audio.muted = true;
    });


    soundBtn.addEventListener("click", () => {
        soundOn = !soundOn;

        if (soundOn) {
            soundBtn.classList.add("audio-on");
        } else {
            soundBtn.classList.remove("audio-on");
        }


        document.querySelectorAll('audio').forEach(audio => {
            audio.muted = !soundOn;
        });
    });
});