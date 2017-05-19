var Boat = (function () {
    function Boat(x, y, hook) {
        this.localX = x;
        this.localY = y;
        this.mousePosition = y;
        this.width = 100;
        this.height = 30;
        this.boatSpeed = 0.8;
        this.isMouseDown = false;
        this.x = this.localX;
        this.y = this.localY;

        this.hook = hook;

        GameModel.getInstance().doc.addEventListener("mousemove", this.onMouseMove.bind(this), false);
        this.canvasWidth = GameModel.getInstance().ctx.canvas.width;

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
        ctx.moveTo(this.x - this.width / 2, this.y - this.height);
        ctx.lineTo(this.x + this.width / 2, this.y - this.height);
        ctx.lineTo(this.x + this.width / 3, this.y);
        ctx.lineTo(this.x - this.width / 3, this.y);
        ctx.lineTo(this.x - this.width / 2, this.y - this.height);
        // ctx.rect(this.x - this.width / 2, this.y - this.height, this.width, this.height);
        ctx.fillStyle = "#000000";
        ctx.fill();
        ctx.closePath();


    };


    Boat.prototype.update = function (deltaTime, cameraY) {

        this.localX += (this.mousePosition - this.localX) * (this.boatSpeed * deltaTime);
        if (this.localX < 0)
            this.localX = 0;
        if (this.localX > this.canvasWidth)
            this.localX = this.canvasWidth;
        this.x = this.localX;
        this.y = this.localY - cameraY;
        this.hook.update(deltaTime, this.x, cameraY);


    };

    return Boat
}());

