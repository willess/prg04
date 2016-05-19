var Tree = (function () {
    function Tree(ypos) {
        this.div = document.createElement("tree");
        document.body.appendChild(this.div);
        this.width = 414;
        this.height = 86;
        this.x = 0 - this.width;
        this.y = ypos;
        this.speed = 3 + Math.random() * 4;
        this.bird1 = new Bird(50, -60, this);
        this.bird2 = new Bird(288, -60, this);
    }
    Tree.prototype.update = function () {
        this.x += this.speed;
        if (this.x > window.innerWidth) {
            this.x = 0 - this.width;
        }
        this.draw();
    };
    Tree.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Tree;
}());
var Bird = (function () {
    function Bird(xpos, ypos, c) {
        this.div = document.createElement("bird");
        this.tree = c;
        this.tree.div.appendChild(this.div);
        this.x = xpos;
        this.y = ypos;
        this.width = 67;
        this.height = 110;
        this.draw();
    }
    Bird.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Bird;
}());
var Game = (function () {
    function Game() {
        this.tree1 = new Tree(90);
        this.tree2 = new Tree(340);
        this.tree3 = new Tree(620);
        requestAnimationFrame(this.gameLoop.bind(this));
    }
    Game.prototype.gameLoop = function () {
        this.tree1.update();
        this.tree2.update();
        this.tree3.update();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map