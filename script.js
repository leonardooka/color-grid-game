
let colors = ['ivory','gold','darkorange','firebrick', 'mediumseagreen', 'cornflowerblue', 'darkblue', 'purple']
let position = {x: 2, y: 2};
const startBtn = document.getElementById('start-btn');
const movesText = document.getElementById('moves');
const startBlock = document.getElementById(`grid-2-2`);
let actualBlock = document.getElementById(`grid-${position.x}-${position.y}`);
startBlock.style.border = 'black solid 5px';
let movesCount = 0;

const randomizeBlocks = () => {
    for (let x = 1; x < 4; x++){
        for (let y = 1; y < 4; y++){
            let singleBlock = document.getElementById(`grid-${x}-${y}`);
            singleBlock.style.background = colors[Math.floor(Math.random()*colors.length)];
        }
    }
}

const start = () => {
    randomizeBlocks();
    startBlock.style.border = '';
    actualBlock.style.border = '';
    position.x = 2;
    position.y = 2;
    movesCount = 0;
    startBlock.style.border = 'black solid 5px';
    movesText.textContent = `Moves Used: ${movesCount}`;
}


const move = (x, y) => {
    startBlock.style.border = '';
    actualBlock.style.border = '';
    position.x = position.x + (x);
    position.y = position.y + (y);
    movesCount++;
    actualBlock = document.getElementById(`grid-${position.x}-${position.y}`);
    actualBlock.style.border = 'black solid 5px';

    let actualColorIndex = colors.indexOf(actualBlock.style.background);
    if (actualColorIndex === colors.length-1){
        actualBlock.style.background = colors[0];
    } else {
        actualBlock.style.background = colors[actualColorIndex+1];
    }
    movesText.textContent = `Moves Used: ${movesCount}`;
}

const moveBlock = (key) => {
    switch(key){
        case "ArrowLeft":
            if(position.x !== 1){
                move(-1,0);}
            break;
        case "ArrowRight":
            if(position.x !== 3){
                move(1,0);}
            break;
        case "ArrowUp":
            if(position.y !== 1){
                move(0,-1);}
            break;
        case "ArrowDown":
            if(position.y !== 3){
                move(0,1);}
            break;
        default:
            break;
    }
    
}

randomizeBlocks();

startBtn.addEventListener('click', start);
window.addEventListener('keydown', ({key})=> moveBlock(key));




