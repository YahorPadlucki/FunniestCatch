var Fish = (function () {

    var colors = ["#A52A2A","#FF7F50","#00008B","#006400","#FF1493","#C71585","#FF4500"];

    function Fish(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;

        this.canvasWidth = GameModel.getInstance().ctx.canvas.width;

        this.width = 40;
        this.height = 20;

        this.modeDirection = 1;
        this.speed = Utils.randomRangeInt(45, 80);

        this.color = colors[Math.floor(Math.random()*colors.length)];
    }

    Fish.prototype.draw = function (cameraX, cameraY) {
        var ctx = GameModel.getInstance().ctx;
        ctx.beginPath();
        ctx.rect(this.positionX - this.width / 2, this.positionY-this.height/2 - cameraY, this.width, this.height);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    };

    Fish.prototype.update = function (deltaTime) {

        this.positionX += this.speed * deltaTime * this.modeDirection;

        if (this.positionX < 0 || this.positionX >= this.canvasWidth){

            this.speed = Utils.randomRangeInt(45, 80);
            this.modeDirection *= -1;
        }


    };
    return Fish;
})();