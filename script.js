console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('spotify clone/urthemoon.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItems'));

let songs = [
    {songName: "UR THE MOON", filePath: "spotify clone/urthemoon.mp3", coverPath: "spotify clone/urthemoon.jpeg"},
    {songName: "2024", filePath: "spotify clone/2024.mp3", coverPath: "spotify clone/2024.jpeg"},
    {songName: "H00DBYAIR", filePath: "spotify clone/H00DBYAIR.mp3", coverPath: "spotify clone/H00DBYAIR.jpeg"},
    {songName: "BACKR00MS ft Travis Scott", filePath: "spotify clone/BACKR00MS.mp3", coverPath: "spotify clone/BACKR00MS.jpeg"},
    {songName: "EVIL J0RDAN", filePath: "spotify clone/EVIL J0RDAN.mp3", coverPath: "spotify clone/EVIL J0RDAN.jpeg"},
    {songName: "KETAMINE", filePath: "spotify clone/KETAMINE.mp3", coverPath: "spotify clone/KETAMINE.jpeg"},
    {songName: "MOJO JOJO", filePath: "spotify clone/MOJO JOJO.mp3", coverPath: "spotify clone/MOJO JOJO.jpg"},
    {songName: "PROBLEM CHILD ft Travis Scott", filePath: "spotify clone/.mp3", coverPath: "spotify clone/.jpg"},
    {songName: "HOMIXIDE555", filePath: "spotify clone/.mp3", coverPath: "spotify clone/.jpg"},
    {songName: "00cactus ft Travis Scott", filePath: "spotify clone/.mp3", coverPath: "spotify clone/.jpg"},
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
        gif.style.opacity = 1;
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
        audioElement.src = `spotify clone/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
