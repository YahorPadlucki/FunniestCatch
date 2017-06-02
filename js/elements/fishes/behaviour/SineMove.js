SineMove = (function () {

    SineMove.prototype = Object.create(DefaultMove.prototype);

    function SineMove(x, y) {

        DefaultMove.apply(this, arguments);

        this.initPositionY = y;

        this.prevX = this.x = x;
        this.prevY = this.y = y;

    }


    SineMove.prototype.move = function (deltaTime) {
        if (this.x < 0 || this.x >= this.canvasWidth) {

            this.speed = Utils.randomRangeInt(45, 80);
            this.moveDirection *= -1;
            this.setPositionInBounds();
        }

        this.x += this.speed * deltaTime * this.moveDirection;
        this.y = 50 * Math.sin(this.x / 20) + this.initPositionY;

        this.dirX = this.prevX - this.x;
        this.dirY = this.prevY - this.y;

        this.angle = Math.atan2(this.dirY, this.dirX);

        this.prevX = this.x;
        this.prevY = this.y;


    };

    return SineMove;

}());