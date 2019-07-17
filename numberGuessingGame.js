var answerNumber = Math.floor(Math.random()*100)+1;
var guessHistory = document.querySelector('.guessHistory');
var yesOrNo = document.querySelector('.yesOrNo');
var highOrLow = document.querySelector('.highOrLow');
var guessButton = document.querySelector('.guessButton');
var guessForm = document.querySelector('.guessForm');
var leftChance = document.querySelector('.leftChance');
var guessCount = 1;
var life = 9;


var emergencyColorchart = {};
emergencyColorchart[0] = "red"
emergencyColorchart[1] = "e54141"
emergencyColorchart[2] = "e95e5e"
emergencyColorchart[3] = "ee7f7f"
emergencyColorchart[4] = "f6bcbc"
emergencyColorchart[5] = "fad8d8"
emergencyColorchart[6] = "fceeee"
emergencyColorchart[7] = "ffffff"
emergencyColorchart[8] = "ffffff"
emergencyColorchart[9] = "ffffff"


function charCheck(){
    var userGuess = Number(guessForm.value);
    if(isNaN(userGuess) || userGuess>100 || userGuess<1){
        yesOrNo.textContent = '1과 100 사이의 숫자만 입력할 수 있어요.';
        yesOrNo.style.backgroundColor = 'red';
        guessForm.value = '';
    }else{
        checkYourNumber(userGuess);
    }
}
function checkYourNumber(userGuess){

    if(guessCount === 1){
        guessHistory.textContent = '입력한 숫자들 : ';
    }

    guessHistory.textContent += userGuess + ' ';
    leftChance.textContent = '앞으로 ' + life +'번 더 시도할 수 있습니다..';

    if(userGuess === answerNumber){
        yesOrNo.textContent = '축하합니다! 정답입니다!';
        yesOrNo.style.backgroundColor = 'Green';
        highOrLow.textContent = '';
        setGameOver();
    }else if(guessCount === 10){
        yesOrNo.textContent = '!!!게임오버!!!';
        highOrLow.textContent = '';
        setGameOver();
    }else{
        yesOrNo.textContent = '틀렸습니다';
        yesOrNo.style.backgroundColor = 'red';
        if(userGuess < answerNumber){
            highOrLow.textContent = '업,,';
        }else if(userGuess > answerNumber){
            highOrLow.textContent = '다운,,';
        }
    }
    

    guessCount++;
    if(userGuess === answerNumber){
        
    }
    document.getElementById("body").style.backgroundColor = emergencyColorchart[Number(life)];
    life -= 1;
    guessForm.value = '';
    guessForm.focus();
}

guessButton.addEventListener('click', charCheck);

var restartButton;

function setGameOver(){
    guessForm.disabled  == true;
    guessButton.disabled == true;
    restartButton = document.createElement('button');
    restartButton.textContent = '새 게임 시작하기';
    document.body.appendChild(restartButton);
    restartButton.addEventListener('click', restartGame);
}

function restartGame(){
    guessCount = 1;
    life = 9;
    var resetParas = document.querySelectorAll('.resultDiv p');
    for(var i=0; i<resetParas.length; i++){
        resetParas[i].textContent ='';
    }

    restartButton.parentNode.removeChild(restartButton);
    guessForm.disabled  == false;
    guessButton.disabled == false;
    guessForm.focus();
    yesOrNo.style.backgroundColor = 'white';
    document.getElementById("body").style.backgroundColor = 'white';
    answerNumber = Math.floor(Math.random()*100) +1;
}