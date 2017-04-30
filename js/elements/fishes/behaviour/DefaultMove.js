DefaultMove = (function () {

    function DefaultMove(x, y) {
        this.x = x;
        this.y = y;
        
        this.canvasWidth = GameModel.getInstance().ctx.canvas.width;
        this.modeDirection = 1;
        this.speed = Utils.randomRangeInt(45, 80);
        this.angle = 0;

    }

    DefaultMove.prototype.move = function (deltaTime) {
        this.x += this.speed * deltaTime * this.modeDirection;

        if (this.x < 0 || this.x >= this.canvasWidth) {

            this.speed = Utils.randomRangeInt(45, 80);
            this.modeDirection *= -1;

            this.setPositionInBounds();
        }


    };

    DefaultMove.prototype.setPositionInBounds = function () {
        if (this.x < 0) {
            this.x = 0;
        }
        if (this.x > this.canvasWidth) {
            this.x = this.canvasWidth;
        }
    };

    return DefaultMove;

}());