document.addEventListener('DOMContentLoaded', () => {
    const WIDTH = 28;
    const SCORE_DISPLAY = document.querySelector('#score');
    const GRID = document.querySelector('.grid');
    let score = 0;
    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]

    // 0 - pac -dots
    // 1 - wall
    // 2 - ghost - lair
    // 3 - poer - pallet
    // 4 - empty

    // create the board
    const sqauress = [];
    const createBoard = () => {
        for(let i=0; i<layout.length; i++) {
            const div = document.createElement('div');
            GRID.appendChild(div);
            sqauress.push(div);
            
            //add the things in the grid
            if(layout[i] === 0) {
            	sqauress[i].classList.add('pac-dot');
            }else if(layout[i] === 1) {
            	sqauress[i].classList.add('wall');
            }else if(layout[i] === 2) {
            	sqauress[i].classList.add('ghost-lair');
            }else if(layout[i] === 3) {
            	sqauress[i].classList.add('power-pallet');
            }
        };
    };
    createBoard();
    
    //create characters
    let pacmanCurrentIndex = 490;
    sqauress[pacmanCurrentIndex].classList.add('pac-man');
    
    //create ghost
    
    class Ghost {
    	constructor(className, startIdx, speed) {
      	this.className = className;
        this.startIdx = startIdx;
        this.speed = speed;
        
        //mutable
        this.currentIdx = startIdx;
        this.isScared = false;
        this.timer = null;
      }
    }
    
     const allGhosts = [
    	new Ghost('blinky', 348, 250),
      new Ghost('pinky', 376, 400),
      new Ghost('inky', 351, 300),
      new Ghost('clyde', 379, 500)
    ];
    
    const checkForGameOver = () => {
    	if(sqauress[pacmanCurrentIndex].classList.contains('ghost') && 
      	 !sqauress[pacmanCurrentIndex].classList.contains('scared-ghost')) {
         
         //clear the interval
         allGhosts.forEach((gh) => {
          clearInterval(gh.timer);
         });
         
         //remove event listeners
         document.removeEventListener('keyup', movePacman);
         
         //alert game over
         setTimeout(() => {
          	alert('Game Over');
         }, 500);
      }
    }
    
    //check for a win
    const checkForWin = () => {
    	if(score >= 274) {
      	//clear the interval
         allGhosts.forEach((gh) => {
          clearInterval(gh.timer);
         });
         
         //remove event listeners
         document.removeEventListener('keyup', movePacman);
         
         //alert game over
         setTimeout(() => {
          	alert('Pac man have won');
         }, 500);
      }
    }
    
    // draw and move ghosts randomly on the board
    const moveGhost = (ghost) => {
    	const directions = [-1, 1, WIDTH, -WIDTH];
      let currDirection = directions[Math.floor(Math.random()*directions.length)]; 
      ghost.timer = setInterval(() => {
      	if(!sqauress[ghost.currentIdx+currDirection].classList.contains('ghost') &&
        	 !sqauress[ghost.currentIdx+currDirection].classList.contains('wall')) {
            sqauress[ghost.currentIdx].classList.remove(ghost.className, 'ghost', 'scared-ghost');
            ghost.currentIdx += currDirection;
            sqauress[ghost.currentIdx].classList.add(ghost.className, 'ghost');
        }else {
        	currDirection = directions[Math.floor(Math.random()*directions.length)];
        }
        if(ghost.isScared) {
        	sqauress[ghost.currentIdx].classList.add('scared-ghost');
        }
        
        //if ghost is scared and pac-man is on it
        if(ghost.isScared && sqauress[ghost.currentIdx].classList.contains('pac-man')) {
        	ghost.isScared = true;
          sqauress[ghost.currentIdx].classList.remove(ghost.className, 'ghost', 'scared-ghost');
          ghost.currentIdx = ghost.startIdx;
          score += 100;
          SCORE_DISPLAY.innerHTML = score;
          sqauress[ghost.currentIdx].classList.add(ghost.className, 'ghost');
        }
        
        //check for game-over and win
        checkForGameOver();
      }, ghost.speed);
    }
    
   	allGhosts.forEach((gh) => {
    	sqauress[gh.currentIdx].classList.add(gh.className, 'ghost');
      moveGhost(gh);
    });
    
    //move ghost randomlly
    allGhosts.forEach((gh) => {
      moveGhost(gh);
    });
    
    //what happens if pac-man eats a pac-dot
    const pacDotEaten = () => {
    	if(sqauress[pacmanCurrentIndex].classList.contains('pac-dot')) {
      	score++;
        SCORE_DISPLAY.innerHTML = score;
        sqauress[pacmanCurrentIndex].classList.remove('pac-dot');
      }
    };
    
    // what happens if pac-man eat a power-pallet
    const powerPalletEaten = () => {
    	if(sqauress[pacmanCurrentIndex].classList.contains('power-pallet')) {
      	score += 100;
        SCORE_DISPLAY.innerHTML = score;
        allGhosts.forEach((gh) => {
        	gh.isScared = true
        });
        setTimeout(() => {
        	 allGhosts.forEach((gh) => {
           	gh.isScared = false
           });
        }, 10000);
        sqauress[pacmanCurrentIndex].classList.remove('power-pallet');
      }
    }
    
     const movePacman = (e) => {
      const isWall= (targetIdx) => sqauress[targetIdx].classList.contains('wall');
      const isGhostLair = (targetIdx) => sqauress[targetIdx].classList.contains('ghost-lair');
    
    	sqauress[pacmanCurrentIndex].classList.remove('pac-man');
      switch(e.key) {
      	case 'ArrowLeft' : {
        	if(pacmanCurrentIndex % WIDTH !== 0 && 
          	 !isWall(pacmanCurrentIndex-1) &&
             !isGhostLair(pacmanCurrentIndex-1)) {
        		 pacmanCurrentIndex -= 1;
          }
          break;
        }
        case 'ArrowRight' : {
        	if(pacmanCurrentIndex % WIDTH !== (WIDTH - 1) && 
          	 !isWall(pacmanCurrentIndex+1) &&
             !isGhostLair(pacmanCurrentIndex+1)) {
        		 pacmanCurrentIndex += 1;
          }
        }
        break;
        case 'ArrowUp' : {
        	if(pacmanCurrentIndex >= WIDTH &&
          	 !isWall(pacmanCurrentIndex-WIDTH) &&
             !isGhostLair(pacmanCurrentIndex-WIDTH)) {
        		 pacmanCurrentIndex -= WIDTH;
          }
          break;
        }
        case 'ArrowDown' : {
        	if(pacmanCurrentIndex < WIDTH*(WIDTH-1) &&
          	 !isWall(pacmanCurrentIndex+WIDTH) &&
             !isGhostLair(pacmanCurrentIndex+WIDTH)) {
        		pacmanCurrentIndex += WIDTH;
          }
          break;
        }
      }
      sqauress[pacmanCurrentIndex].classList.add('pac-man');
      
      //event - update and check
      pacDotEaten();
      powerPalletEaten();
      checkForGameOver();
      checkForWin();
    }
    
    document.addEventListener('keyup', movePacman);
});

