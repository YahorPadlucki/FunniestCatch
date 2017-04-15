var Fish = (function () {
    function Fish(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;

        this.width = 40;
        this.height = 20;

        this.modeDirection =1;
        this.speed = 1;
    }

    Fish.prototype.draw = function (cameraX, cameraY) {
        var ctx = GameModel.getInstance().ctx;
        ctx.beginPath();
        ctx.rect(this.positionX, this.positionY - cameraY, this.width, this.height);
        ctx.closePath();
        ctx.fillStyle = "#346503";
        ctx.fill();
    };

    Fish.prototype.update = function (deltaTime) { //todo use delta time

        var canvasWidth = GameModel.getInstance().ctx.canvas.width;
        this.positionX += this.speed * this.modeDirection;

        if(this.positionX<0||this.positionX>canvasWidth)
            this.modeDirection*=-1;

    };
    return Fish;
})();