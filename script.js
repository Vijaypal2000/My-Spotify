let audioElement= new Audio('./songs/1.mp3');
// audioElement.play();
let songList=[
    {songName: "Let Me Love You",filePath:"./songs/1.mp3",coverPath:"./covers/1.jpg"},
    {songName: "Tenu M Love Krta",filePath:"./songs/2.mp3",coverPath:"./covers/2.jpg"},
    {songName: "All Is Well",filePath:"./songs/3.mp3",coverPath:"./covers/3.jpg"},
    {songName: "Back It Up",filePath:"./songs/4.mp3",coverPath:"./covers/4.jpg"},
    {songName: "Get Up Jawani",filePath:"./songs/5.mp3",coverPath:"./covers/5.jpg"},
    {songName: "Chand Shifariz",filePath:"./songs/6.mp3",coverPath:"./covers/6.jpg"},
    {songName: "Mai Hoo Naa",filePath:"./songs/7.mp3",coverPath:"./covers/7.jpg"},
    {songName: "Munni Badnaam",filePath:"./songs/8.mp3",coverPath:"./covers/8.jpg"},
    {songName: "Shila Ki Jawani",filePath:"./songs/9.mp3",coverPath:"./covers/9.jpg"},
    {songName: "High Heals",filePath:"./songs/10.mp3",coverPath:"./covers/10.jpg"}
]
let masterPlay=document.getElementById("masterPlay");
let gif=document.getElementById("gif");
let progressBar=document.getElementById("myProgressBar");
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.add("fa-pause");
        masterPlay.classList.remove("fa-play");
        gif.style.opacity=1;

    }
    else{ 
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity=0;
    }
});
audioElement.addEventListener('timeupdate',()=>{
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progress;
});
progressBar.addEventListener('change',()=>{
    audioElement.currentTime=progressBar.value*audioElement.duration/100;
});