var SineMove = (function () {
    function FishSineMove(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.initPositionY = positionY;
        this.initPositionX = positionX;
        this.prevX = this.positionX;
        this.prevY = this.positionY;
        this.canvasWidth = GameModel.getInstance().ctx.canvas.width;

        this.width = 40;
        this.height = 20;
        this.angel =0;
        this.modeDirection = 1;
        this.speed = Utils.randomRangeInt(45, 80);

    }

    FishSineMove.prototype.draw = function (cameraX, cameraY) {
        var ctx = GameModel.getInstance().ctx;
        ctx.save();
        ctx.translate(this.positionX + this.width / 2, this.positionY + this.height / 2);
        ctx.rotate(this.angel);
        ctx.beginPath();
        ctx.rect(- this.width / 2, -this.height/2 - cameraY, this.width, this.height);
        ctx.rotate(-this.angel);
        ctx.translate((this.positionX + this.width / 2) * (-1), (this.positionY + this.height/2) * (-1));
        ctx.closePath();
        ctx.fillStyle = "#346503";
        ctx.fill();
        ctx.restore();
    };

    FishSineMove.prototype.update = function (deltaTime) {



        this.positionX += this.speed * deltaTime * this.modeDirection;
        if (this.positionX < 0 || this.positionX >= this.canvasWidth){

            this.speed = Utils.randomRangeInt(45, 80);
            this.modeDirection *= -1;
        }
        this.positionY =  50*Math.sin(this.positionX/20)+this.initPositionY; // y = ƒ(x)

        var dirX = this.prevX - this.positionX;
        var dirY = this.prevY - this.positionY;

        this.angel =  Math.atan2(dirY, dirX) ;

        this.prevX = this.positionX;
        this.prevY = this.positionY;
    };
    return SineMove;
})();