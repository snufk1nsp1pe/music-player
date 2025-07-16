let songs = [
    {
        title: "Cry Baby", 
        artist: "The Neighbourhood",
        src : "/songs/cry-baby.mp3",
        cover: "/covers/cry-baby-cover.jpg",
    },
    {
        title: "Prey", 
        artist: "The Neighbourhood",
        src: "/songs/prey.mp3",
        cover: "/covers/cry-baby-cover.jpg"
    },
    {
        title: "Runaway", 
        artist: "Del Shannon", 
        src: "/songs/Runaway.mp3",
        cover: "/covers/runaway-cover.jpg"
    },
    {
        title: "The Driver", 
        artist: "Maneskin", 
        src: "/songs/THE-DRIVER.mp3",
        cover: "/covers/the-driver-cover.jpg"
    },
    {
        title: "When Can I See You Again", 
        artist: "Owl City", 
        src: "/songs/when-can-i-see-you-again.mp3",
        cover: "/covers/owl-city-cover.jpg"
    },
    {
        title: "En Nuit", 
        artist: "Videoclub", 
        src: "/songs/en-nuit.mp3",
        cover: "/covers/videoclub.jpg"
    }
]

songs = songs.map((song, index) => ({
  ...song,
  id: `track-${index + 1}`

}));
console.log(songs);
let currenSongIndex = 0;
let audio = document.getElementById('song');
let play = document.getElementById('play-btn');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let image = document.getElementById('cover-img');
let songTitle = document.getElementById('song-title');
let songArtist = document.getElementById('song-artist');
// audio.addEventListener('timeupdate', () => {
//  const progressBar = document.getElementById('progress');
//  progressBar.value = (audio.currentTime / audio.duration) * 100;
//});

//progressBar.addEventListener('input', () => {
//  audio.currentTime = (progressBar.value / 100) * audio.duration;
//});

//function to randomize songs on refresh
function randomSong(){
    const randomIndex = Math.floor(Math.random() * songs.length);
    const song = songs[randomIndex];
   audio.src = song.src;
    image.src = song.cover;
    songTitle.innerHTML = `<b>${song.title}</b>` ;
    songArtist.innerHTML = `<span>-</span>${song.artist}<span>-</span>`;

    console.log(typeof audio.play); // should log: function
    console.log('testest')
}
randomSong()
play.innerHTML = `
            <svg class="size-14 fill-black hover:scale-110 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
        `
play.addEventListener('click', ()=>{
    
    if(!audio.paused){
        audio.pause();
        isPlaying = false;
        play.innerHTML = `
            <svg class="size-14 fill-black hover:scale-110 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
        `
    }else{
        audio.play();
        isPlaying = true;
        play.innerHTML = `
            <svg class="size-14 fill-black hover:scale-110 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/></svg>

        `
    }
    
})
next.addEventListener('click', ()=>{
    if(currenSongIndex===songs.length){
        const song = songs[songs.length];
        audio.src = song.src;
        image.src = song.cover;
        songTitle.innerHTML = `<b>${song.title}</b>` ;
        songArtist.innerHTML = `<span>-</span>${song.artist}<span>-</span>`;
        audio.play();
        play.innerHTML = `
            <svg class="size-14 fill-black hover:scale-110 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/></svg>

        `
    }else{
        currenSongIndex++;
        const song = songs[currenSongIndex];
        audio.src = song.src;
        image.src = song.cover;
        songTitle.innerHTML = `<b>${song.title}</b>` ;
        songArtist.innerHTML = `<span>-</span>${song.artist}<span>-</span>`;
        audio.play();
        play.innerHTML = `
            <svg class="size-14 fill-black hover:scale-110 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/></svg>

        `
    }
    
})

previous.addEventListener('click', ()=>{
    if(currenSongIndex===0){
        const song = songs[0];
        audio.src = song.src;
        image.src = song.cover;
        songTitle.innerHTML = `<b>${song.title}</b>` ;
        songArtist.innerHTML = `<span>-</span>${song.artist}<span>-</span>`;
        audio.play();
        play.innerHTML = `
            <svg class="size-14 fill-black hover:scale-110 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/></svg>

        `
    }else{
        currenSongIndex--;
        const song = songs[currenSongIndex];
        audio.src = song.src;
        image.src = song.cover;
        songTitle.innerHTML = `<b>${song.title}</b>` ;
        songArtist.innerHTML = `<span>-</span>${song.artist}<span>-</span>`;
        audio.play();
        play.innerHTML = `
            <svg class="size-14 fill-black hover:scale-110 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/></svg>

        `
    }
})

let bar = document.getElementById('progress-bar');
let currentTimeEl = document.getElementById('current-time');
let totalTime = document.getElementById('total-time');

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' + secs : secs}`;
}

audio.addEventListener('loadedmetadata', ()=>{
    totalTime.textContent = formatTime(audio.duration);
    bar.max = Math.floor(audio.duration);
})

audio.addEventListener('timeupdate', ()=>{
    currentTimeEl.textContent = formatTime(audio.currentTime);
    bar.value = Math.floor(audio.currentTime);
})

bar.addEventListener('input', ()=>{
    audio.currentTime = bar.value;
})
 
if(bar.value === bar.max){
    play.innerHTML = `
            <svg class="size-14 fill-black hover:scale-110 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
        `
        }



let menu = document.getElementById('menu');
let menubtn = document.getElementById('menu-button');
let mode = "normal";
menubtn.addEventListener('click', ()=>{
  if(mode == "normal"){
        menu.style.transform = "translateX(-348.5px)";
        menubtn.style.transform = "rotate(90deg)";
        mode = "menu";
        setTimeout(() => {
        menu.style.zIndex = "0";
    }, 500);
  }else{
        mode = "normal";
        menu.style.transform = "translateX(0px)";
        menubtn.style.transform = "rotate(0deg)";
        menu.style.zIndex = "-1"
  }
})

const ul = document.querySelector("ul"); 
let i = 0;
songs.forEach(song => {
    i++;
    if(i === songs.length){
        
        ul.innerHTML += `
            <li class="flex justify-between">
                <div id = "${song.id}" class="li-song">
                    <p class="songtitle"><b>${song.title}</b></p>
                    <p class="songartist">${song.artist}</p>
                </div>
                <svg id="dots" class="size-6 float-right" fill="#000000" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="Glyph" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M13,16c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,14.346,13,16z" id="XMLID_294_"></path><path d="M13,26c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,24.346,13,26z" id="XMLID_295_"></path><path d="M13,6c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,4.346,13,6z" id="XMLID_297_"></path></g></svg>

            </li>

            
        `
    }else{
        ul.innerHTML += `
            
            <li  class="flex justify-between">
                <div id = "${song.id}" class="li-song">
                    <p class="songtitle"><b>${song.title}</b></p>
                    <p class="songartist">${song.artist}</p>
                </div>
                <svg id="dots" class="size-6 float-right" fill="#000000" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="Glyph" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M13,16c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,14.346,13,16z" id="XMLID_294_"></path><path d="M13,26c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,24.346,13,26z" id="XMLID_295_"></path><path d="M13,6c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,4.346,13,6z" id="XMLID_297_"></path></g></svg>
                
            </li>
            <hr>
        `
        
    }
    let dots = document.getElementById('dots');
    dots.addEventListener('click', ()=>{
        // edit/delete buttons
    })
    
});

ul.addEventListener("click", function (e) {
  if (e.target.tagName === "DIV" || e.target.closest("div")) {
    const div = e.target.closest("div");
    id = div.id;
    const song = songs.find(s => s.id === id);

    audio.src = song.src;
    image.src = song.cover;
    songTitle.innerHTML = `<b>${song.title}</b>` ;
    songArtist.innerHTML = `<span>-</span>${song.artist}<span>-</span>`;
    audio.play();
        play.innerHTML = `
            <svg class="size-14 fill-black hover:scale-110 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/></svg>

        `
  }
});

document.addEventListener('keydown', function(e){
    if(e.code === 'Space'){
        e.preventDefault();
        if(audio.paused){
            audio.play()
            play.innerHTML = `
            <svg class="size-14 fill-black hover:scale-110 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/></svg>

        `
        }else{
            audio.pause()
            play.innerHTML = `
            <svg class="size-14 fill-black hover:scale-110 transition" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
        `
        }
    }

})

let shuffltBtn = document.getElementById('shuffle-btn')
let loopBtn = document.getElementById('loop-btn')
let songMode = 'normal'
loopBtn.addEventListener('click', ()=>{
    if(songMode === 'normal'){
        songMode = 'loop'
        audio.loop = true
        loopBtn.innerHTML = `
        <svg class="size-8 fill-black hover:scale-110 transition" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11114)"> <path d="M21 9L21 4L19 5" stroke="#292929" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15 7H7" stroke="#292929" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5 19L3 17M3 17L5 15M3 17L17 17" stroke="#292929" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 11C3 8.79086 4.79086 7 7 7" stroke="#292929" stroke-width="2.5" stroke-linecap="round"></path> <path d="M21 13C21 15.2091 19.2091 17 17 17" stroke="#292929" stroke-width="2.5" stroke-linecap="round"></path> </g> <defs> <clipPath id="clip0_429_11114"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>

        `
        
    }else{
        loopBtn.innerHTML=`
            <svg class="size-8 fill-black hover:scale-110 transition" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clip-path="url(#clip0_429_11218)"> <path d="M19 5L21 7M21 7L19 9M21 7H7" stroke="#292929" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5 19L3 17M3 17L5 15M3 17L17 17" stroke="#292929" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 11C3 8.79086 4.79086 7 7 7" stroke="#292929" stroke-width="2.5" stroke-linecap="round"></path> <path d="M21 13C21 15.2091 19.2091 17 17 17" stroke="#292929" stroke-width="2.5" stroke-linecap="round"></path> </g> <defs> <clipPath id="clip0_429_11218"> <rect width="24" height="24" fill="white"></rect> </clipPath> </defs> </g></svg>                
        `
        songMode = 'normal'
        audio.loop = false
        
    }
    
})

//let songDiv = document.getElementById(`${song.id}`)

  
function autoNext(){
    let index = songs.findIndex(song => {
        const filename = audio.src.split('/').pop(); 
        return song.src.includes(filename); 
    });
    if(index===songs.length - 1){
            const song = songs[0];
            audio.src = song.src;
            image.src = song.cover;
            songTitle.innerHTML = `<b>${song.title}</b>` ;
            songArtist.innerHTML = `<span>-</span>${song.artist}<span>-</span>`;
            audio.play();
    }
    index++;
    const song = songs[index];
    audio.src = song.src;
    image.src = song.cover;
    songTitle.innerHTML = `<b>${song.title}</b>` ;
    songArtist.innerHTML = `<span>-</span>${song.artist}<span>-</span>`;
    audio.play();
}
audio.addEventListener('ended', autoNext);

let playMode = 'normal'

function shufflePlaylist(){
    if(playMode==='normal'){
        playMode = 'shuffle'
        randomSong();
    }else{
        playMode = 'normal'

    }
}
/* */