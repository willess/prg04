/// <reference path="charmander.ts"/>
class Game {
    
    private char1:Charmander;
    private char2:Charmander;
    
    constructor() {
        
        // we kunnen meerdere charmanders maken met elk hun eigen keyboard input        
        this.char1 = new Charmander(65, 68, 87, 83);
        this.char2 = new Charmander(37, 39, 38, 40);
        
        // start game loop        
        requestAnimationFrame(this.gameLoop.bind(this));        
    }
    
    // game loop
    private gameLoop(){
        this.char1.move();
        this.char2.move();
        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
} 