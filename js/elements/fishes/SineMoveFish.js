var SineMoveFish = (function () {
    function SineMoveFish(x, y) {

        Fish.apply(this, arguments);

        this.initPositionY = y;
        this.initPositionX = x;
        this.prevX = this.localX = x;
        this.prevY = this.localY = y;

        this.angle = 0;
    }

    SineMoveFish.prototype = Object.create(Fish.prototype);


    SineMoveFish.prototype.draw = function () {
        var ctx = GameModel.getInstance().ctx;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.beginPath();
        ctx.rect(-this.width / 2, -this.height / 2, this.width, this.height);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
        this.drawVertices();
    };

    var count = 0
    SineMoveFish.prototype.update = function (deltaTime, cameraY) {

        // if (count < 3) {

            count++
            this.localX += this.speed * deltaTime * this.modeDirection;
            if (this.localX < 0 || this.localX >= this.canvasWidth) {

                this.speed = Utils.randomRangeInt(45, 80);
                this.modeDirection *= -1;
            }
            this.localY = 50 * Math.sin(this.localX / 20) + this.initPositionY;

            this.dirX = this.prevX - this.localX;
            this.dirY = this.prevY - this.localY;

            this.angle = Math.atan2(this.dirY, this.dirX);

            this.prevX = this.localX;
            this.prevY = this.localY;

        // }


        this.x = this.localX;
        this.y = this.localY - cameraY;
    };
    return SineMoveFish;
})();