var Net = (function () {

    function Net(positionX, positionY) {

        this.positionX = positionX;
        this.positionY = positionY;

        this.width = 30;
        this.heigth = 30;

    }

    Net.prototype.draw = function (cameraX,cameraY) {

        var ctx = GameModel.getInstance().ctx;

        ctx.beginPath();
        ctx.rect(this.positionX-this.width/2, this.positionY-this.heigth-cameraY, this.width, this.heigth);
        ctx.fillStyle = "#ff0000";
        ctx.fill();
        ctx.closePath();

    };

    Net.prototype.update = function () {

    };
    return Net;
}());