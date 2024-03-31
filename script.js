const container = document.querySelector('.container');
const cover = container.querySelector(".image img");
const songName = container.querySelector(".name");
const artist = container.querySelector(".artist");
const duration = container.querySelector(".duration");
const playPauseBtn = container.querySelector(".play-pause");
const audio = container.querySelector(".audio");
const songLink = container.querySelector(".link");
const newSong = container.querySelector(".anotherSong");

let songIndex;

window.addEventListener("load", () => {
    loadMusic(songIndex);
    playPauseBtn.querySelector("i").innerText = "play_arrow";
});

function loadMusic(){
    songIndex = Math.floor((Math.random() * allSongs.length))
    const songs = allSongs[songIndex];
    songName.innerText = songs.name;
    artist.innerHTML = `<span>by </span>${songs.artist}`;
    duration.innerHTML = `<span>Duration: </span>0${songs.min}:${songs.sec}`
    cover.src = `images/${songs.img}.jpg`;
    audio.src = `songs/${songs.src}.mp3`;
    ytlink = songs.link;
}

newSong.addEventListener("click", () => {
    loadMusic();
    playMusic();
});

songLink.addEventListener("click", () => {
    window.open(ytlink, "_blank")
})

function playMusic(){
    container.classList.add("paused");
    playPauseBtn.querySelector("i").innerText = "pause";
    audio.play();
}

function pauseMusic(){
    container.classList.remove("paused");
    playPauseBtn.querySelector("i").innerText = "play_arrow";
    audio.pause();
}

playPauseBtn.addEventListener("click", () => {
    const isMusicPaused = container.classList.contains("paused");
    isMusicPaused ? pauseMusic() : playMusic();
    playingNow();
})