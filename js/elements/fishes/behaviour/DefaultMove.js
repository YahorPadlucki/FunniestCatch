DefaultMove = (function () {

    function DefaultMove(x, y) {
        this.x = x;
        this.y = y;

        this.canvasWidth = GameModel.getInstance().ctx.canvas.width;
        this.moveDirection = -1;
        this.speed = Utils.randomRangeInt(45, 80);
        this.angle = 0;

    }

    DefaultMove.prototype.move = function (deltaTime) {
        this.x += this.speed * deltaTime * this.moveDirection;

        if (this.x < 0 || this.x >= this.canvasWidth) {

            this.speed = Utils.randomRangeInt(45, 80);
            this.moveDirection *= -1;

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

        if (this.moveDirection > 0) {
            this.angle = 180 * Math.PI / 180;
        }
        else {
            this.angle = 0;
        }
    };


    return DefaultMove;

}());