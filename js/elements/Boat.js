var Boat = (function () {
    function Boat() {
        this.positionX = 0;
        this.positionY = 0;
        this.width = 200;
        this.heigth = 150;

        this.ctx = GameModel.getInstance().ctx;

    }

    Boat.prototype.render = function () {
        this.positionX++;
        this.ctx.beginPath();
        this.ctx.rect(this.positionX, this.positionY, this.width, this.heigth);
        this.ctx.fillStyle = "0x000000";
        this.ctx.fill();
        this.ctx.closePath();
    };

    return Boat
}());

