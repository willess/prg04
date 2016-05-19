/// <reference path="bird.ts" />

class Tree {
    
    public div: HTMLElement;
    private speed: number;
    
    public x:number;
    public y:number;
    public width:number;
    public height:number;
    
    private bird1: Bird;
    private bird2: Bird;
    
    constructor(ypos:number) {
        this.div = document.createElement("tree");
        document.body.appendChild(this.div);
                
        this.width = 414;
        this.height = 86;
        this.x = 0 - this.width;
        this.y = ypos;
        
        this.speed = 3 + Math.random() * 4;
        
        this.bird1 = new Bird(50,-60, this);
        this.bird2 = new Bird(288,-60, this);
    }
    
    
    
    public update():void {
        this.x += this.speed;
        
        if(this.x > window.innerWidth){
            this.x = 0 - this.width;
        }
        
        this.draw();
    }
    
    public draw() : void {
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

}