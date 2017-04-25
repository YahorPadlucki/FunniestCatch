var SineMoveFish = (function () {
    function SineMoveFish(positionX, positionY) {

        Fish.apply(this,arguments);

        this.initPositionY = positionY;
        this.initPositionX = positionX;
        this.prevX = this.positionX;
        this.prevY = this.positionY;

        this.angel =0;
    }

    SineMoveFish.prototype.draw = function (cameraX, cameraY) {
        var ctx = GameModel.getInstance().ctx;
        ctx.save();
        ctx.translate(this.positionX + this.width / 2, this.positionY + this.height / 2- cameraY);
        ctx.rotate(this.angel);
        ctx.beginPath();
        ctx.rect(- this.width / 2, -this.height/2, this.width, this.height);
        ctx.rotate(-this.angel);
        ctx.translate((this.positionX + this.width / 2) * (-1), (this.positionY + this.height/2- cameraY) * (-1));
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
    };


    count =0;
    SineMoveFish.prototype.update = function (deltaTime) {

        if(count>3 )return
        count++;
        this.positionX += this.speed * deltaTime * this.modeDirection;
        if (this.positionX < 0 || this.positionX >= this.canvasWidth){

            this.speed = Utils.randomRangeInt(45, 80);
            this.modeDirection *= -1;
        }
        this.positionY =  50*Math.sin(this.positionX/20)+this.initPositionY; 

        var dirX = this.prevX - this.positionX;
        var dirY = this.prevY - this.positionY;

        this.angel =  Math.atan2(dirY, dirX) ;

        this.prevX = this.positionX;
        this.prevY = this.positionY;
    };
    return SineMoveFish;
})();