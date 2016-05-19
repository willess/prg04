/// <reference path="tree.ts"/>

class Bird {
    
    private div: HTMLElement;
    
    public x:number;
    public y:number;
    public width:number;
    public height:number;
    
    private tree:Tree;

    constructor(xpos:number, ypos:number, c:Tree) {
        this.div = document.createElement("bird");
        
        this.tree = c;
        this.tree.div.appendChild(this.div);
        
        this.x = xpos;
        this.y = ypos;
        this.width = 67;
        this.height = 110;
        
        this.draw();
    }
        
    
    public draw() : void {
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

}