/**
 * Battleship
 */
class Battleship {
    
    private directionX: number = 0;
    private directionY: number = 0;

    private x: number = 0;
    private y: number = 0;
    
    private speed: number = 0;
    
    private context: CanvasRenderingContext2D;
    private image: Image;
    
    constructor() {
        this.createCanvasElement();
        
        this.directionX = 0;
        this.directionY = 0;
        this.speed      = 3;
        
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup"  , (e) => this.onKeyUp(e));
    }
    
    private createCanvasElement() : void {
        var canvas = document.getElementsByTagName("canvas")[0];
        this.context = canvas.getContext('2d');

        this.image = new Image();   // Create new img element
        this.image.src = 'images/battleship.png'; // Set source path
    }
    
    // keyboard input zorgt dat de snelheid wordt aangepast
    private onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
            case 38: //UP
                this.directionY = -1;
                break;
            case 39: //RIGHT
                this.directionX = 1;
                break;
            case 40: //DOWN
                this.directionY = 1;
                break;
            case 37: //LEFT
                this.directionX = -1;
                break;
        }
    }
    
    // speed op 0 alleen als de eigen keys zijn losgelaten
    private onKeyUp(event:KeyboardEvent):void {
        switch(event.keyCode){
            case 38: //UP
                this.directionY = 0;
                break;
            case 39: //RIGHT
                this.directionX = 0;
                break;
            case 40: //DOWN
                this.directionY = 0;
                break;
            case 37: //LEFT
                this.directionX = 0;
                break;
        }
    }
    
    public move() : void {
        this.x = this.x + this.speed * this.directionX;
        this.y = this.y + this.speed * this.directionY;
    }
    
    public draw(): void {
        this.context.drawImage(this.image, this.x, this.y, 400, 308); // x, y, width, height
        /**
         * img	Source image object	Sprite sheet
            sx	Source x	Frame index times frame width
            sy	Source y	0
            sw	Source width	Frame width
            sh	Source height	Frame height
            dx	Destination x	0
            dy	Destination y	0
            dw	Destination width	Frame width
            dh	Destination height	Frame height
         */
    }
}
