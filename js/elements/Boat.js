var Boat = (function () {
    function Boat() {
        this.positionX = 0;
        this.positionY = 0;
        this.width = 200;
        this.heigth = 150;

    }

    Boat.prototype.render = function () {
        this.positionX++;
        ctx.beginPath();
        ctx.rect(this.positionX, this.positionY, this.width, this.heigth);
        ctx.fillStyle = "0x000000";
        ctx.fill();
        ctx.closePath();
    };

    return Boat
}());

