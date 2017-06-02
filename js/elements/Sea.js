var Sea = (function () {

    function Sea(positionY) {
        this.localY = positionY;
        this.ctx = GameModel.getInstance().ctx;
        this.height = 0;
        this.y = this.localY;
    }

    Sea.prototype.draw = function () {
        this.ctx.beginPath();
        this.ctx.rect(0, this.y, this.ctx.canvas.width, this.ctx.canvas.height + this.height);
        this.ctx.closePath();


        var deep = GameModel.getInstance().deep;
        var shade =  deep/3000*-80;
        this.ctx.fillStyle =  Utils.shadeColor("#51DCFF",shade);
        this.ctx.fill();
    };


    Sea.prototype.update = function (deltaTime, cameraY) {
        this.y = this.localY - cameraY;
        this.height = this.ctx.canvas.height + cameraY;
    };

    return Sea;
})();