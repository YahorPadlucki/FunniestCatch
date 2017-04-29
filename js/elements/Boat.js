var Boat = (function () {
    function Boat(x, y) {
        this.localX = x;
        this.localY = y;
        this.mousePosition = y;
        this.width = 100;
        this.heigth = 50;
        this.boatSpeed = 0.8;
        this.isMouseDown = false;
        this.x = this.localX;
        this.y = this.localY;

        GameModel.getInstance().doc.addEventListener("mousemove", this.onMouseMove.bind(this), false);

        this.hook = new Hook(this.localX, this.localY);
    }

    Boat.prototype.onMouseMove = function (e) {
        var canvas = GameModel.getInstance().ctx.canvas;
        var mouseX = e.clientX - canvas.offsetLeft;

        if (mouseX > 0 && mouseX < canvas.width) {
            this.mousePosition = mouseX;
        }
    };

    Boat.prototype.draw = function () {
        var ctx = GameModel.getInstance().ctx;

        ctx.beginPath();
        ctx.rect(this.x - this.width / 2, this.y - this.heigth, this.width, this.heigth);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();
    };


    Boat.prototype.update = function (deltaTime, cameraY) {
        this.localX += (this.mousePosition - this.localX) * (this.boatSpeed * deltaTime);
        this.x = this.localX;
        this.y = this.localY - cameraY;
        this.draw();
        this.hook.update(deltaTime, this.x, cameraY);
    };

    return Boat
}());

