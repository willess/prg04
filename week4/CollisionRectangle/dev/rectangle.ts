/**
 * Rectangle
 */
class Rectangle {
    
    public x : number;
    public y : number;
    public width: number;
    public height: number;
    
    constructor(x:number, y:number, w:number, h:number) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    
    // kijk of een punt binnen deze rectangle is - handig voor muis kliks
    hitsPoint(posx:number, posy:number): boolean {
        var differencex = this.x - posx;
        var differencey = this.y - posy;
        
        return Math.abs(differencex) < this.width/2 && Math.abs(differencey) < this.height/2;
    }
    
    // kijk of twee rectangles elkaar raken
    hitsOtherRectangle(rec: Rectangle): boolean {
        var differencex = this.x - rec.x;
        var differencey = this.y - rec.y;
        
        return Math.abs(differencex) < this.width/2 + rec.width/2 && Math.abs(differencey) < this.height/2 + rec.height/2;
    }
}