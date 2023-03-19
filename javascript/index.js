let direction ={
    x:0,
    y:0
};  
const foodSound=new Audio("music/food.mp3");
const gameOverSound=new Audio("music/gameover.mp3");
const moveSound=new Audio("music/move.mp3");
const musicSound=new Audio("music/music.mp3");
let speed=2;
let lastPaintTime=0;
let snakeArr={
    x:13,
    y:15
}


function main(cTime){
  window= requestAnimationFrame(main);
  console.log(cTime);

  if ((cTime - lastPaintTime)/1000 < (1/speed) ){
    return;
  }
  lastPaintTime =cTime;
  gameEngine()

}

function gameEngine(){
    
}
window= requestAnimationFrame(main)