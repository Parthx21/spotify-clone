console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('./songs/urthemoon.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName: "UR THE MOON", filePath: "./songs/urthemoon.mp3", coverPath: "./images/urthemoon.jpeg"},
    {songName: "2024", filePath: "./songs/2024.mp3", coverPath: "./images/2024.jpeg"},
    {songName: "H00DBYAIR", filePath: "./songs/H00DBYAIR.mp3", coverPath: "./images/H00DBYAIR.jpeg"},
    {songName: "BACKR00MS ft Travis Scott", filePath: "./songs/BACKR00MS.mp3", coverPath: "./images/BACKR00MS.jpeg"},
    {songName: "EVIL J0RDAN", filePath: "./songs/EVIL J0RDAN.mp3", coverPath: "./images/EVIL J0RDAN.jpeg"},
    {songName: "KETAMINE", filePath: "./songs/KETAMINE.mp3", coverPath: "./images/KETAMINE.jpeg"},
    {songName: "MOJO JOJO", filePath: "./songs/MOJO JOJO.mp3", coverPath: "./images/MOJO JOJO.jpeg"},
    {songName: "PROBLEM CHILD ft Travis Scott", filePath: "./songs/PROBLEM CHILD.mp3", coverPath: "spoti/PROBLEM CHILD.jpeg"},
    {songName: "HOMIXIDE555", filePath: "./songs/HOMIXIDE555.mp3", coverPath: "./images/HOMIXIDE555.jpeg"},
    {songName: "00cactus ft Travis Scott", filePath: "./songs/00CACTUS.mp3", coverPath: "./images/00cactus.jpeg"},
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].src = songs[i].songName;
})

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `./songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `./songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `./songs/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})