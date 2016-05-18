class Battleship {
    constructor() {
        this.directionX = 0;
        this.directionY = 0;
        this.x = 0;
        this.y = 0;
        this.speed = 0;
        this.createCanvasElement();
        this.directionX = 0;
        this.directionY = 0;
        this.speed = 3;
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
    }
    createCanvasElement() {
        var canvas = document.getElementsByTagName("canvas")[0];
        this.context = canvas.getContext('2d');
        this.image = new Image();
        this.image.src = 'images/battleship.png';
    }
    onKeyDown(event) {
        switch (event.keyCode) {
            case 38:
                this.directionY = -1;
                break;
            case 39:
                this.directionX = 1;
                break;
            case 40:
                this.directionY = 1;
                break;
            case 37:
                this.directionX = -1;
                break;
        }
    }
    onKeyUp(event) {
        switch (event.keyCode) {
            case 38:
                this.directionY = 0;
                break;
            case 39:
                this.directionX = 0;
                break;
            case 40:
                this.directionY = 0;
                break;
            case 37:
                this.directionX = 0;
                break;
        }
    }
    move() {
        this.x = this.x + this.speed * this.directionX;
        this.y = this.y + this.speed * this.directionY;
    }
    draw() {
        this.context.drawImage(this.image, this.x, this.y, 400, 308);
    }
}
class Game {
    constructor() {
        this.canvas = document.getElementsByTagName("canvas")[0];
        this.context = this.canvas.getContext('2d');
        this.battleship = new Battleship();
        requestAnimationFrame(() => this.update());
    }
    update() {
        this.battleship.move();
        this.draw();
    }
    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.battleship.draw();
        requestAnimationFrame(() => this.update());
    }
}
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map