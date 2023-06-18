window.addEventListener("load", function () {
    const song = document.querySelector("#song");
    const playButton = document.querySelector(".player-play");
    const prevButton = document.querySelector(".player-prev");
    const nextButton = document.querySelector(".player-next");
    const current = document.querySelector(".player-current");
    const duration = document.querySelector(".player-duration");
    const bar = document.querySelector("#progress-bar");
    const playerImage = document.querySelector(".player-image");
    const namesong = document.querySelector("#namesong");

    const listMusic = ['holo.mp3', 'home.mp3', 'spark.mp3', 'summer.mp3'];

    function formattime(time) {
        let hours = time / 3600;
        let minutes = time % 3600 / 60;
        let seconds = time % 3600 % 60;
        let str = (hours < 10 ? `0${Math.trunc(hours)}:` : `${Math.trunc(hours)}:`)
            + (minutes < 10 ? `0${Math.trunc(minutes)}:` : `${Math.trunc(minutes)}:`)
            + (seconds < 10 ? `0${Math.trunc(seconds)}` : Math.trunc(seconds));
        return str;
    }

    (function displayCurrentTime() {
        setInterval(() => {
            let time = song.currentTime;
            bar.value = Math.trunc(song.currentTime);
            current.innerHTML = formattime(time)
        }, 1000);
    })();

    this.setInterval(function initSong() {
        bar.step = Math.trunc(song.duration) / bar.offsetWidth;
        bar.max = Math.trunc(song.duration);
        namesong.innerHTML = song.src;
        let time = song.duration;
        duration.innerHTML = formattime(time);
    }, 500);

    let isPlaying = false;
    playButton.addEventListener('click', handleplay);

    function handleplay() {
        if (isPlaying == false) {
            song.play();
            isPlaying = true;
            playButton.classList.remove('fa-play');
            playButton.classList.add('fa-pause');
            playerImage.classList.add('is-playing');
        }
        else {
            song.pause();
            isPlaying = false;
            playButton.classList.remove('fa-pause');
            playButton.classList.add('fa-play');
            playerImage.classList.remove('is-playing');
        }
    }

    bar.addEventListener('change', handlebar);
    function handlebar() {
        song.currentTime = Math.trunc(bar.value);
    }

    nextButton.addEventListener('click', handlenextButtton)
    prevButton.addEventListener('click', handleprevButtton)

    let idx = 0;
    function handlenextButtton() {
        song.setAttribute("src", `./files/${listMusic[id(btn = 'next')]}`);
        isPlaying = false;
        handleplay();
    }

    function handleprevButtton() {
        song.setAttribute("src", `./files/${listMusic[id(btn = 'prev')]}`);
        isPlaying = false;
        handleplay();
    }

    function id(btn = 'next') {
        if (btn == 'next') {
            if (idx == listMusic.length - 1) {
                idx = 0;
            }
            else {
                ++idx;
            }
        }
        else {
            if (idx == 0) {
                idx = listMusic.length - 1;
            }
            else {
                --idx;
            }
        }
        return idx;
    }
    song.onended = handlenextButtton;
});
