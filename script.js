let musics = [
    {
        name : "Set Fire To The Rain",
        cover : "imgs/set-fire.jpg",
        audio : new Audio("./musics/set-fire.mp3")
    },
    {
        name : "Lose yourself",
        cover : "imgs/lose-yourself.jpg",
        audio : new Audio("./musics/lose-yourself.mp3")
    },
    {
        name : "Ready for it",
        cover : "imgs/ready-for-it.jpg",
        audio : new Audio("./musics/ready-for-it.mp3")
    }
]


let range = document.querySelector("#music-time");
let musicName = document.querySelector("#music-name");
let musicCover = document.querySelector("#music-cover");
let playBtn = document.querySelector("#play-btn");
let nextBtn = document.querySelector("#next-btn");
let preBtn = document.querySelector("#pre-btn");

let currentMusicIndex = 0;
let audio;
update();

range.addEventListener("input",()=>{
    audio.currentTime = range.value;
})

playBtn.addEventListener("click",()=>{
    if(audio.paused)
    {
        audio.play();
        musicCover.style.animationPlayState = "running";
        playBtn.classList.replace("fa-play","fa-pause");
    }
    else
    {
        audio.pause();
        musicCover.style.animationPlayState = "paused";
        playBtn.classList.replace("fa-pause","fa-play");

    }

})

nextBtn.addEventListener("click",()=>{
    changeMusic("next")
})

preBtn.addEventListener("click",()=>{
    changeMusic("pre")
})

function changeMusic(type)
{
    audio.pause();
    range.value = 0;
    playBtn.classList.replace("fa-pause","fa-play");
    musicCover.style.animationPlayState = "paused";
    audio.currentTime = 0;

    if (type == "next") {
        if (currentMusicIndex == musics.length-1) {
            currentMusicIndex = 0;
        } else {
            currentMusicIndex ++;
        }
        

    } else {
        if (currentMusicIndex == 0) {
            currentMusicIndex = musics.length-1;
        } else {
            currentMusicIndex --;
        }
    }

    update();
}

function update()
{
    audio = musics[currentMusicIndex].audio;

    musicCover.src = musics[currentMusicIndex].cover;
    musicName.innerText = musics[currentMusicIndex].name;

    audio = musics[currentMusicIndex].audio;
    musicCover.src = musics[currentMusicIndex].cover;
    musicName.innerText = musics[currentMusicIndex].name;
    audio.addEventListener("canplay",()=>{
        range.max = audio.duration;
    })
    audio.addEventListener("timeupdate",()=>{
        range.value = audio.currentTime;
    })
}