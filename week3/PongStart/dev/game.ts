/// <reference path="ball.ts"/>
class Game {
    
    ball1:Ball;
    ball2:Ball;
    
    constructor() {
        
        this.ball1 = new Ball();
        this.ball2 = new Ball();
           
        // start game loop        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    // game loop
    private gameLoop(){
        this.ball1.move();
        this.ball2.move();
        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
} 