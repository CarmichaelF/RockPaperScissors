let points = 0;
const pointsH2 = document.getElementById('points');
const feedback = document.getElementById('feedback');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');



function play(key) {
    const result = key + randomComputerInput();
    switch (result) {
        case 'pr':
        case 'rs':
        case 'sp':
        console.log(result,'win');
            break;
        case 'rp':
        case 'sp':
        case 'ps':
        console.log(result,'lose');
            break;
        case 'rr':
        case 'ss':
        case 'pp':
        console.log(result, 'draw');
    }


}

function randomComputerInput() {
    const options = ['r', 'p', 's'];
    return options[Math.floor(Math.random() * 3)];
}

rock.addEventListener('click', () => play('r'));
paper.addEventListener('click', () => play('p'));
scissors.addEventListener('click', () => play('s'));