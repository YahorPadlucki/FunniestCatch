var Sea = (function () {

    function Sea(positionY) {
        this.localY = positionY;
        this.ctx = GameModel.getInstance().ctx;
        this.height = 0;
    }

    Sea.prototype.draw = function draw () {
        this.ctx.beginPath();
        this.ctx.rect(0, this.y,  this.ctx.canvas.width,  this.ctx.canvas.height+this.height);
        this.ctx.closePath();

        this.ctx.fillStyle = "#51DCFF";
        this.ctx.fill();
    };

    Sea.prototype.update = function (deltaTime,cameraY) {
        this.y=this.localY-cameraY;
        // this.ctx.canvas.height=cameraY;
    };

    return Sea;
})();