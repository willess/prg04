/// <reference path="tree.ts"/>

class Game {
    
    private tree1:Tree;
    private tree2:Tree;
    private tree3:Tree;
 
    constructor() {
        
        this.tree1 = new Tree(90);
        this.tree2 = new Tree(340);
        this.tree3 = new Tree(620);
        
        
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    
    private gameLoop(){
        this.tree1.update();
        this.tree2.update();
        this.tree3.update();
                
        // hiermee wordt de gameloop opnieuw aangeroepen
        requestAnimationFrame(this.gameLoop.bind(this));
    }
} 

