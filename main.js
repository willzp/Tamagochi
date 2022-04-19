import {Tamagochigame} from './modules/game.js'
const sw = new Tamagochigame();
document.querySelector('button').addEventListener('click', toggleStopWatch);
document.getElementById('feed').addEventListener('click', feed);
document.getElementById('play').addEventListener('click', play);

function feed(){
    sw.feed();
}

function play(){
    sw.play();
}

function toggleStopWatch(){
    if(sw.isRunning()){
        sw.stop();
        document.querySelector('button').innerText = 'Start';
    }
    else{
        sw.start();
        document.querySelector('button').innerText = 'Stop';  
    } 
}