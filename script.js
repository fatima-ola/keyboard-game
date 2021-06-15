window.addEventListener('load', init);

//levels of game
const levels = {
    easy: 5,
    medium: 3,
    hard: 2
}
const currentLevel = levels.easy;
let time = 5;
let score = 0;
let isPlaying;

const seconds = document.querySelector("#seconds");
const currentWordDisplay = document.querySelector("#words");
const wordInput = document.querySelector("#word-input");
const message = document.querySelector("#message");
const timeDisplay = document.querySelector("#time-left");
const scoreDisplay = document.querySelector("#score");

const words = [
    "prefiguration",
    "archetype",
    "epitome",
    "guide",
    "pacesetter",
    "holotype",
    "image",
    "loadstar",
    "microcosm",
    "original",
    "paradigm", 
    "template",
    "pacemaker",
    "occurrence",
    "pilot",
    "beauty",
    "prodigy",
    "beaut",
    "pattern",
    "case",
    "instance",
    "happening",
    "natural event",
    "prototype",
    "warning",
    "clip",
    "mortification",
    "piece",
    "time",
    "humiliation",
    "bit",
    "monition",
    "admonition",
    "word of advice",
    
]

//initialize Game

function init (){
    //show number of seconds in UI
    seconds.innerHTML = currentLevel;
    //load word from array
    showWord(words);
    //matching the typed words with ddisplayed words
    wordInput.addEventListener('input', startMatch)
    //call countdown every second
    setInterval(countDown, 1000);
    //check status of game
    setInterval(checkGameStatus,50);
}

//load word from array
function showWord(words){
    const randomWord = Math.floor(Math.random() * words.length);
    currentWordDisplay.innerHTML = words[randomWord];
}

//call countdown every second
function countDown(){
    if(time > 0){
        time--
    }else if(time === 0){
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

 //check status of game
function checkGameStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'GAME OVER!!!';
        message.className = 'gameover'
        score = -1;
    }
}

function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    if(score === -1){
        scoreDisplay.innerHTML = 0;
    }else {
        scoreDisplay.innerHTML = score;
    }
   

}

function matchWords(){
    if(wordInput.value === currentWordDisplay.innerHTML){
        message.innerHTML = 'Correct!!!';
        return true;
    }else{
        message.innerHTML = '';
        return false;

    }
}