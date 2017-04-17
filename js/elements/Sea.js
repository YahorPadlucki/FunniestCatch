var Sea = (function () {

    function Sea(positionY) {
        this.positionY = positionY;
        this.ctx = GameModel.getInstance().ctx;
    }

    Sea.prototype.draw = function (cameraX,cameraY) {
        this.ctx.beginPath();
        this.ctx.rect(0, this.positionY-cameraY,  this.ctx.canvas.width,  this.ctx.canvas.height+cameraY);
        this.ctx.closePath();

        this.ctx.fillStyle = "#51DCFF";
        this.ctx.fill();
    };

    return Sea;
})();