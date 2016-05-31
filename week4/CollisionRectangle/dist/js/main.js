var Paddle = (function () {
    function Paddle() {
        this.div = document.createElement("paddle");
        document.body.appendChild(this.div);
        this.x = 20;
        this.y = 200;
        this.width = 25;
        this.height = 100;
    }
    Paddle.prototype.getBounds = function () {
        return new Rectangle(this.x, this.y, this.width, this.height);
    };
    Paddle.prototype.update = function () {
        this.draw();
    };
    Paddle.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Paddle;
}());
var Ball = (function () {
    function Ball() {
        this.div = document.createElement("ball");
        document.body.appendChild(this.div);
        this.setStart();
    }
    Ball.prototype.getBounds = function () {
        return new Rectangle(this.x, this.y, this.width, this.height);
    };
    Ball.prototype.setStart = function () {
        this.x = 330;
        this.y = 210;
        this.width = 40;
        this.height = 40;
        this.speedX = -3;
        this.speedY = 0;
    };
    Ball.prototype.hitPaddle = function () {
        this.speedX *= -1;
    };
    Ball.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > window.innerWidth || this.x < -40) {
            document.getElementsByTagName("ui")[0].innerHTML = "Resetting ball";
            this.setStart();
        }
        if (this.y + 40 > window.innerHeight || this.y < 0) {
            this.speedY *= -1;
        }
        this.draw();
    };
    Ball.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Ball;
}());
var Game = (function () {
    function Game() {
        this.paddle = new Paddle();
        this.ball = new Ball();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.gameLoop = function () {
        var ballbounds = this.ball.getBounds();
        var paddlebounds = this.paddle.getBounds();
        var hit = ballbounds.hitsOtherRectangle(paddlebounds);
        if (hit) {
            this.ball.hitPaddle();
            document.getElementsByTagName("ui")[0].innerHTML = "HIT PADDLE!";
        }
        this.ball.update();
        this.paddle.update();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Rectangle = (function () {
    function Rectangle(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    Rectangle.prototype.hitsPoint = function (posx, posy) {
        return (posx >= this.x && posx <= this.x + this.width && posy >= this.y && posy <= this.y + this.height);
    };
    Rectangle.prototype.hitsOtherRectangle = function (rec) {
        return (this.x < rec.x + rec.width && this.x + this.width > rec.x && this.y < rec.y + rec.height && this.height + this.y > rec.y);
    };
    return Rectangle;
}());
//# sourceMappingURL=main.js.map