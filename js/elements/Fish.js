var Fish = (function () {
    function Fish(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;

        this.canvasWidth = GameModel.getInstance().ctx.canvas.width;

        this.width = 40;
        this.height = 20;

        this.rightBorder = this.canvasWidth - this.width;

        if (this.positionX >= this.rightBorder) {
            this.positionX = this.rightBorder;
        }

        this.modeDirection = 1;
        this.speed = Utils.randomRangeInt(45, 80);
    }

    Fish.prototype.draw = function (cameraX, cameraY) {
        var ctx = GameModel.getInstance().ctx;
        ctx.beginPath();
        ctx.rect(this.positionX, this.positionY - cameraY, this.width, this.height);
        ctx.closePath();
        ctx.fillStyle = "#346503";
        ctx.fill();
    };

    Fish.prototype.update = function (deltaTime) {

        this.positionX += this.speed * deltaTime * this.modeDirection;

        if (this.positionX < 0 || this.positionX >= this.canvasWidth - this.width){

            this.speed = Utils.randomRangeInt(45, 80);
            this.modeDirection *= -1;
        }

    };
    return Fish;
})();