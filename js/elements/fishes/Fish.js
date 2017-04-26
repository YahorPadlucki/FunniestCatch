var Fish = (function () {

    var colors = ["#A52A2A","#FF7F50","#00008B","#006400","#FF1493","#C71585","#FF4500"];

    function Fish(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;

        this.canvasWidth = GameModel.getInstance().ctx.canvas.width;

        this.width = 40;
        this.height = 20;

        this.angle =0;

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


        this.drawVertecies(cameraY);

    };

    Fish.prototype.drawVertecies = function (cameraY) {
        var ctx = GameModel.getInstance().ctx;

        var topLeft = {x:this.positionX - this.width / 2,y: this.positionY-this.height/2 - cameraY};
        var topRight ={x:this.positionX + this.width / 2,y: this.positionY-this.height/2 - cameraY};
        var bottomLeft ={x:this.positionX - this.width / 2,y: this.positionY+this.height/2 - cameraY};
        var bottomRight ={x:this.positionX + this.width / 2,y: this.positionY+this.height/2 - cameraY};

        var center = {x:this.positionX- this.width / 2,y:this.positionY-this.height/2};

        topLeft= Utils.rotatePoint(center,topLeft,this.angle);
        topRight= Utils.rotatePoint(center,topRight,this.angle);
        bottomLeft= Utils.rotatePoint(center,bottomLeft,this.angle);
        bottomRight= Utils.rotatePoint(center,bottomRight,this.angle);

        ctx.beginPath();
        ctx.rect(topLeft[0],  topLeft[1], 5, 5);
        ctx.rect(topRight[0],  topRight[1], 5, 5);
        ctx.rect(bottomLeft[0],  bottomLeft[1], 5, 5);
        ctx.rect(bottomRight[0],  bottomRight[1], 5, 5);
        ctx.closePath();
        ctx.fillStyle = "#ffffff";
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