/* eslint-disable indent */
let pointsUser = 0;
let pointsComputer = 0;
let pointsH2 = document.getElementById('points');
const feedback = document.getElementById('feedback');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

function win(clicked, words){
    pointsUser++;
    pointsH2.innerHTML = pointsUser + ':' + pointsComputer;
    clicked.classList.add('win');
    setInterval(() => clicked.classList.remove('win'), 800);
    feedback.innerHTML = `Congrats! ${words[0]} beats ${words[1]} !`;
}

function lose(clicked, words){
    pointsComputer++;
    pointsH2.innerHTML = pointsUser + ':' + pointsComputer;
    clicked.classList.add('lose');
    setInterval(() => clicked.classList.remove('lose'), 800);
    feedback.innerHTML = `Sorry, but ${words[1]} beats ${words[0]} !`;
}

function draw(clicked, words){
    clicked.classList.add('draw');
    setInterval(() => clicked.classList.remove('draw'), 800);
    feedback.innerHTML = `It's a draw! ${words[0]} is equal to ${words[1]}...`;
}

function transformInWord(result){
    let array = [...result];
    if(array[0] === 'r'){
        array[0] = 'rock';
    }
    else if(array[0] === 'p'){
        array[0] = 'paper';
    }
    else{
        array[0] = 'Scissors';
    }

    if(array[1] === 'r'){
        array[1] = 'rock';
    }
    else if(array[1] === 'p'){
        array[1] = 'paper';
    }
    else{
        array[1] = 'scissors';
    }
    return array;
}

function play(key, clicked) {
    const result = key + randomComputerInput();
    switch (result) {
        case 'pr':
        case 'rs':
        case 'sp':
        win(clicked, transformInWord(result));
            break;
        case 'rp':
        case 'sr':
        case 'ps':
        lose(clicked, transformInWord(result));
            break;
        case 'rr':
        case 'ss':
        case 'pp':
        draw(clicked, transformInWord(result));
        break;
        default:
        throw 'Error: Function play, invalid argument';
    }
}

function randomComputerInput() {
    const options = ['r', 'p', 's'];
    return options[Math.floor(Math.random() * 3)];
}

rock.addEventListener('click', () => play('r', rock));
paper.addEventListener('click', () => play('p', paper));
scissors.addEventListener('click', () => play('s', scissors));