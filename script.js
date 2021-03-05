const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 500;

const cw = canvas.width;
const ch = canvas.height;

const span = document.getElementById('wynik');

var moveX = 0;
var moveY = 0;
let ballSize = 10;
var life = 3

let gamePaused = false;

function table() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 1000, 500);
}

function drawBall() {
    var ballX = (ballSize*2)+moveX;
    var ballY = (ballSize*2)+moveY;
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballSize, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();
}

function toStart(){
    if(life != 0){
        life--;
        span.textContent = life;
        if(moveY <= 125){
            moveX=0;
            moveY=0;
        }
        if(moveY > 125 && moveY <= 250){
            moveX = 950;
            moveY = 145;
        }
        if(moveY > 250 && moveY <= 375){
            moveX = 0;
            moveY = 270;
        }
        if(moveY > 375 && moveY <= ch){
            moveX = 950;
            moveY = 395;
        }
    }
}

var wo = 10;
var ho = 30;

var Xopponent1 = 100;
var Yopponent1 = 20;
var Xopponent2 = 200;
var Yopponent2 = 20;
var Xopponent3 = 300;
var Yopponent3 = 20;
var Xopponent4 = cw/4;
var Yopponent4 = 220;
var Xopponent5 = 400;
var Yopponent5 = 270;
var Xopponent6 = 600;
var Yopponent6 = 270;
var Xopponent7 = 800;
var Yopponent7 = 270;
var Xopponent8 = 800;
var Yopponent8 = 395;
var Xopponent9 = 600;
var Yopponent9 = 395;
var Xopponent10 = 350;
var Yopponent10 = 395;

var rectangle = 0;

ret = Boolean(false);
ret1 = Boolean(false); 
ret2 = Boolean(false);
to_start = Boolean(false);
ret3 = Boolean(false); 
ret4 = Boolean(false); 
ret5 = Boolean(false); 
ret6 = Boolean(false); 
ret7 = Boolean(false); 
ret8 = Boolean(false); 
ret9 = Boolean(false); 

function drawOpponents(){

    ctx.beginPath();
    ctx.rect(Xopponent1, Yopponent1, wo, ho);
    ctx.fillStyle="white";
    ctx.fill();
    ctx.beginPath();
    ctx.rect(Xopponent2, Yopponent2, wo, ho);
    ctx.fillStyle="white";
    ctx.fill();
    ctx.beginPath();
    ctx.rect(Xopponent3, Yopponent3, wo, ho);
    ctx.fillStyle="white";
    ctx.fill();0
    ctx.beginPath();
    ctx.rect(Xopponent4, Yopponent4, wo, ho);
    ctx.fillStyle="white";
    ctx.fill();
    ctx.beginPath();
    ctx.rect(Xopponent5, Yopponent5, wo, ho);
    ctx.fillStyle="white";
    ctx.fill();
    ctx.beginPath();
    ctx.rect(Xopponent6, Yopponent6, wo, ho);
    ctx.fillStyle="white";
    ctx.fill();
    ctx.beginPath();
    ctx.rect(Xopponent7, Yopponent7, wo, ho);
    ctx.fillStyle="white";
    ctx.fill();
    ctx.beginPath();
    ctx.rect(Xopponent8, Yopponent8, wo, ho);
    ctx.fillStyle="white";
    ctx.fill();
    ctx.beginPath();
    ctx.rect(Xopponent9, Yopponent9, wo, ho);
    ctx.fillStyle="white";
    ctx.fill();
    ctx.beginPath();
    ctx.rect(Xopponent10, Yopponent10, wo, ho);
    ctx.fillStyle="white";
    ctx.fill();
    
    ctx.beginPath();
    ctx.rect(0, 125, cw*0.9, 20);
    ctx.fillStyle="#999900";
    ctx.fill();
    ctx.beginPath();
    ctx.rect(cw*0.1, 250, cw*0.9, 20);
    ctx.fillStyle="#999900";
    ctx.fill();
    ctx.beginPath();
    ctx.rect(0, 375, cw*0.9, 20);
    ctx.fillStyle="#999900";
    ctx.fill();
    
    ctx.beginPath();
    ctx.rect(20, 400, 20, 95);
    ctx.fillStyle="#7f5200";
    ctx.fill();

    if(Yopponent1 == ch-30 ) ret=true;
    if(Yopponent1 == 10 ) ret=false;
    
    if(Yopponent2 == ch-30 ) ret1=true;
    if(Yopponent2 == 10 ) ret1=false;
    
    if(Yopponent3 == 100) ret2=true;
    if(Yopponent3 == 10 ) ret2=false;
    if(Yopponent3 == 100 && Xopponent3 > 0.9*cw) to_start=true;
    if(Yopponent3 == 10 && Xopponent3 < cw/3) to_start=false;
    
    if(Yopponent4 <= 145) ret3 = true;
    if(Yopponent4 >= 230) ret3 = false;
    if(Xopponent4 >= 3/4*cw) ret4 = true;
    if(Xopponent4 <= cw/4) ret4 = false;
    
    if(Yopponent5 >= 345 ) ret5=true;
    if(Yopponent5 <= 270 ) ret5=false;
    
    if(Yopponent6 >= 345 ) ret6=true;
    if(Yopponent6 <= 270 ) ret6=false;
    
    if(Yopponent7 >= 345 ) ret7=true;
    if(Yopponent7 <= 270 ) ret7=false;
    
    if(Yopponent8 >= ch-30) ret8=true;
    if(Yopponent8 <= 395) ret8=false;
    
    if(Yopponent9 >= ch-30) ret9=true;
    if(Yopponent9 <= 395) ret9=false;
    
    if(Xopponent10 >= 450 && Yopponent10 <= 395) rectangle = 1;
    if(Xopponent10 >= 450 && Yopponent10 >= ch-30) rectangle = 2;
    if(Xopponent10 <= 250 && Yopponent10 >= ch-30) rectangle = 3;
    if(Xopponent10 <= 250 && Yopponent10 <= 395) rectangle = 0;

    if(ret == false) Yopponent1 += 5;
    if(ret == true) Yopponent1 -= 5; 
    if(ret1 == false) Yopponent2 += 10;
    if(ret1 == true) Yopponent2 -= 10;
    if(ret2 == false) {Yopponent3 += 5; Xopponent3 += 5;}
    if(ret2 == true) Yopponent3 -=5 ;
    if(to_start == true) {Yopponent3 -= 5; Xopponent3 -= 35;}
    if(ret3 == false) Yopponent4 -=0.1;
    if(ret3 == true) Yopponent4 +=0.1;
    if(ret4 == false) Xopponent4 +=10;
    if(ret4 == true) Xopponent4 -=10;
    if(ret5 == false) Yopponent5 +=1.5;
    if(ret5 == true) Yopponent5 -=1.5;
    if(ret6 == false) Yopponent6 +=2;
    if(ret6 == true) Yopponent6 -=2;
    if(ret7 == false) Yopponent7 +=3.5;
    if(ret7 == true) Yopponent7 -=3.5;
    if(ret8 == false) {Yopponent8 +=3; Xopponent8 +=2;}
    if(ret8 == true) {Yopponent8 -=3; Xopponent8 -=2;}
    if(ret9 == false) {Yopponent9 +=3; Xopponent9 -=2;}
    if(ret9 == true) {Yopponent9 -=3; Xopponent9 +=2;}
    if(rectangle == 0) Xopponent10 +=5;
    if(rectangle == 1) Yopponent10 +=5;
    if(rectangle == 2) Xopponent10 -=5;
    if(rectangle == 3) Yopponent10 -=5;
}

function hitBall() {
    drawBall();
        if( moveX < 0){ 
            moveX += 10 ;
            toStart();
        }
        if( moveX > cw-40){
            moveX -= 10 ;
            toStart();
        }
        if( moveY < 0){ 
            moveY += 10 ;
            toStart();
        }
        if( moveY > ch-40){
            moveY -= 10 ;
            toStart();
        }
    
        var ballY = (ballSize*2)+moveY;
        var ballX = (ballSize*2)+moveX;
    
        if( ballX >= Xopponent1-ballSize && ballX <= Xopponent1+wo+ballSize && ballY <= Yopponent1+ho+ballSize && ballY >= Yopponent1){
            toStart();
        }
        if( ballX >= Xopponent2-ballSize && ballX <= Xopponent2+wo+ballSize && ballY <= Yopponent2+ho+(ballSize/2) && ballY >= Yopponent2){
            toStart();
        }
        if(ballX >= Xopponent3-ballSize && ballX <= Xopponent3+wo+ballSize && ballY <= Yopponent3+wo+(ballSize/2) && ballY >= Yopponent3){
            toStart();
        }
        if(ballX >= Xopponent4-ballSize && ballX <= Xopponent4+wo+ballSize && ballY <= Yopponent4+wo+(ballSize/2) && ballY >= Yopponent4){
            toStart();
        }
        if(ballX >= Xopponent5-ballSize && ballX <= Xopponent5+wo+ballSize && ballY <= Yopponent5+wo+(ballSize/2) && ballY >= Yopponent5){
            toStart();
        }
        if(ballX >= Xopponent6-ballSize && ballX <= Xopponent6+wo+ballSize && ballY <= Yopponent6+wo+(ballSize/2) && ballY >= Yopponent6){
            toStart();
        }
        if(ballX >= Xopponent7-ballSize && ballX <= Xopponent7+wo+ballSize && ballY <= Yopponent7+wo+(ballSize/2) && ballY >= Yopponent7){
            toStart();
        }
        if(ballX >= Xopponent8-ballSize && ballX <= Xopponent8+wo+ballSize && ballY <= Yopponent8+wo+(ballSize/2) && ballY >= Yopponent8){
            toStart();
        }
        if(ballX >= Xopponent9-ballSize && ballX <= Xopponent9+wo+ballSize && ballY <= Yopponent9+wo+(ballSize/2) && ballY >= Yopponent9){
            toStart();
        }
        if(ballX >= Xopponent10-ballSize && ballX <= Xopponent10+wo+ballSize && ballY <= Yopponent10+wo+(ballSize/2) && ballY >= Yopponent10){
            toStart();
        }
        if(ballX >= 0 && ballX <= 0.9*cw+(ballSize/2) && ballY <= 145+(ballSize/2) && ballY >= 125){
            toStart();
        }
        if(ballX >= 0.1*cw && ballX <= cw+(ballSize/2) && ballY <= 270+(ballSize/2) && ballY >= 250){
            toStart();
        }
        if(ballX >= 0 && ballX <= 0.9*cw+(ballSize/2) && ballY <= 395+(ballSize/2) && ballY >= 375){
            toStart();
        }
        if(ballX >= 20 && ballX <= 40+(ballSize/2) && ballY <= 495 && ballY >= 400-(ballSize/2)){
            winGame();
            
        }
}

function ball() {
    if(life > 0){
        drawBall();
        drawOpponents();
        hitBall();
    }
    else loseGame();
}

function welcomeGame() {
    table();
    clickKey();
 
    ctx.fillStyle = "rgba(91, 98, 126, 0.9)";
    ctx.fillRect(0, 0, 1000, 500);
    ctx.fillStyle = "#999900";
    ctx.font = "60px Georgia";
    ctx.fillText("Naciśnij S żeby rozpocząć ", cw / 2 - 300, ch / 2);
}
function winGame(){    
    ctx.fillStyle = "rgba(91, 98, 126, 0.9)";
    ctx.fillRect(0, 0, 1000, 500);
    ctx.fillStyle = "#999900";
    ctx.font = "60px Georgia";
    ctx.fillText("Gratulacje wygrałeś! ", cw / 2 - 300, ch / 2);
    ctx.font = "24px Georgia";
    ctx.fillText("Naciśnij R aby zagrać od nowa ", cw / 2 - 180, ch / 2+50);
}

function loseGame(){
    ctx.fillStyle = "rgba(91, 98, 126, 1)";
    ctx.fillRect(0, 0, 1000, 500);
    ctx.fillStyle = "#999900";
    ctx.font = "60px Georgia";
    ctx.fillText("Niestety przegrałeś :/ ", cw / 2 - 300, ch / 2);
    ctx.font = "24px Georgia";
    ctx.fillText("Naciśnij R aby zagrać od nowa ", cw / 2 - 180, ch / 2+50);
}

function initGame(){
    gamePaused = false;
    gameInterval = window.setInterval(function () {
        table();
        ball();

    }, 1000 / 60);
}


function togglePause() {
    if (gamePaused) {
        resumeGame();
    } else {
        ctx.fillStyle = '#5b627e';
        ctx.fillRect(0, 0, 1000, 500);
        ctx.fillStyle = "#999900";
        ctx.font = "60px Georgia";
        ctx.fillText("Naciśnij P by wrócić do gry", cw / 2 - 300, ch / 2);
        pauseGame();
    }
}

function resumeGame() {
    if (gamePaused) {
        gamePaused = false;
        initGame();
    }
}

function pauseGame() {
    if (!gamePaused) {
        gamePaused = true;
        clearInterval(gameInterval);
    }
}

function clickKey() {
    document.onkeydown = function (e) {
        if (e.keyCode == 83) {
            console.log('start');
            span.textContent = life;
            initGame();
        }
        else if(e.keyCode == 82) location.reload(true);
        if (e.keyCode == 39) {
            moveX += ballSize/2;
        }
        if (e.keyCode == 37) {
            moveX -= ballSize/2;
        }
        if (e.keyCode == 38) {
            moveY -= ballSize/2;
        }
        if (e.keyCode == 40) {
            moveY += ballSize/2;
        }
    }
}

window.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 80:
            togglePause();
            break;
    }
});

welcomeGame();
