'use strict';
// Nikhil Roy Video player
// contact +8801774372294;
// don't copy full code try to learn something;

// global variable are here;
let video = document.querySelector('#video');
let dur_range = document.querySelector('#dur_range');
let prev_dur = document.querySelector('#prev_dur');
let next_dur = document.querySelector('#next_dur');
let dur_time = document.querySelector('#dur_time');
let dur_thumb = document.querySelector('#dur_thumb');
let vol_range = document.querySelector('#vol_range');
let play = document.querySelector('#play');
let sound = document.querySelector('#sound');



// load the video
window.onload = videoLoad;
function videoLoad(){
    video.pause();
    video.volume = .5;
    play.innerHTML = '&#9658;'

}
play.onclick = function(){
    if (video.paused) {
        video.play();
        play.innerHTML = '&#9835;'
    } else {
        video.pause();
        play.innerHTML = '&#9658;'

    }
}

// update the video...
setInterval(updateVideo, 10);

function updateVideo(){
    dur_thumb.style.width = (video.currentTime / video.duration) *100 + '%'; // this is very very important for math;
    dur_range.value = video.currentTime;
    dur_range.max = video.duration;
    
    let floatCurrentTime = Math.floor(video.currentTime);
    let tMin = (Math.floor(floatCurrentTime / 60) < 10) ? '0' + Math.floor(floatCurrentTime / 60) : Math.floor(floatCurrentTime / 60); 
    console.log(tMin);
    let tSec = (floatCurrentTime > 59) ? floatCurrentTime % 60 : floatCurrentTime;
  
    dur_time.innerHTML = tMin + ' : ' + ((tSec < 10) ? '0' + tSec : tSec); //
    vol_range.oninput = function(){
        video.volume = vol_range.value/100;
    }
}
dur_range.oninput = function(){
    video.currentTime = dur_range.value;
}
next_dur.onclick = function(){
    video.currentTime += 20; 
}
prev_dur.onclick = function(){
    video.currentTime -= 20; 
};

sound.onmouseover = function(){
    vol_range.setAttribute('style', 'opacity: 1; pointer-events: visible;')
}
sound.onmouseout = function(){
    vol_range.setAttribute('style', 'opacity: 0; pointer-events: none;')
}
vol_range.onmouseover = function(){
    vol_range.setAttribute('style', 'opacity: 1; pointer-events: visible;')
}
vol_range.onmouseout = function(){
    vol_range.setAttribute('style', 'opacity: 0; pointer-events: none;')
}
document.title = 'Custom JS Video Player by Nikhil Roy'