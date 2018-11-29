/* eslint-disable indent */
let pointsUser = 0;
let pointsComputer = 0;
let pointsH2 = document.getElementById('points');
const feedback = document.getElementById('feedback');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

function win(){
    pointsUser++;
    pointsH2.innerHTML = pointsUser + ':' + pointsComputer;
}

function lose(){
    pointsComputer++;
    pointsH2.innerHTML = pointsUser + ':' + pointsComputer;
}

function draw(){
    
}

function play(key) {
    const result = key + randomComputerInput();
    switch (result) {
        case 'pr':
        case 'rs':
        case 'sp':
        win();
            break;
        case 'rp':
        case 'sr':
        case 'ps':
        lose();
            break;
        case 'rr':
        case 'ss':
        case 'pp':
        draw();
        break;
        default:
        throw 'Error: Function play, invalid argument';
    }
}

function randomComputerInput() {
    const options = ['r', 'p', 's'];
    return options[Math.floor(Math.random() * 3)];
}

rock.addEventListener('click', () => play('r'));
paper.addEventListener('click', () => play('p'));
scissors.addEventListener('click', () => play('s'));