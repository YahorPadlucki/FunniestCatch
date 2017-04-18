var Boat = (function () {
    function Boat(x, y) {
        this.positionX = x;
        this.positionY = y;
        this.mousePosition = y;
        this.width = 100;
        this.heigth = 50;
        this.boatSpeed = 0.8;
        this.isMouseDown = false;

        GameModel.getInstance().doc.addEventListener("mousemove", this.onMouseMove.bind(this), false);

        this.net = new Net(this.positionX, this.positionY);
    }

    Boat.prototype.onMouseMove = function (e) {
        var canvas = GameModel.getInstance().ctx.canvas;
        var mouseX = e.clientX - canvas.offsetLeft;

        if (mouseX > 0 && mouseX < canvas.width) {
            this.mousePosition = mouseX;
        }
    };

    Boat.prototype.draw = function (cameraX, cameraY) {
        var ctx = GameModel.getInstance().ctx;

        ctx.beginPath();
        ctx.rect(this.positionX - this.width / 2, this.positionY - this.heigth - cameraY, this.width, this.heigth);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();

        this.net.draw(cameraX, cameraY);
    };


    Boat.prototype.update = function (deltaTime) {
        this.positionX += (this.mousePosition - this.positionX) * (this.boatSpeed * deltaTime);

       this.net.update(deltaTime,this.positionX);

    };

    return Boat
}());

