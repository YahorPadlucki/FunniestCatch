var Fish = (function () {

    var colors = ["#A52A2A", "#FF7F50", "#00008B", "#006400", "#FF1493", "#C71585", "#FF4500"];

    function Fish(x, y) {

        this.width = 20;
        this.height = 20;
        this.headWidth = this.height/2;
        this.teilLength = 10;

        this.color = colors[Math.floor(Math.random() * colors.length)];

        this.moveBehaviour = new EasingBehaviour(x, y);
        this.angle = this.moveBehaviour.angle;
    }

    Fish.prototype.draw = function () {
        var ctx = GameModel.getInstance().ctx;

    /*    ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.beginPath();
        ctx.rect(-this.width / 2, -this.height / 2, this.width, this.height);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
        this.drawVertices();*/

    ctx.save();
        ctx.fillStyle = this.color
        ctx.beginPath();

        ctx.arc(this.x+this.height/2,this.y+this.height/2,this.height/2,1.57,-1.57,false);
        ctx.fill();
        ctx.beginPath();
        ctx.fillRect(this.x+this.headWidth,this.y,this.width,this.height);
        ctx.beginPath();
        ctx.moveTo(this.x+this.headWidth+this.width,this.y);
        ctx.lineTo(this.x+this.headWidth+this.width+this.teilLength,this.y+this.height/2);
        ctx.lineTo(this.x+this.headWidth+this.width,this.y+this.height);
        ctx.moveTo(this.x+this.headWidth+this.width,this.y);
        ctx.lineTo(this.x+this.headWidth+this.width,this.y+this.height);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(this.x+this.headWidth+this.width+this.teilLength,this.y+this.height/2);
        ctx.lineTo(this.headWidth+this.width+this.teilLength*2,this.y);
        ctx.moveTo(this.x+this.headWidth+this.width+this.teilLength,this.y+this.height/2);
        ctx.lineTo(this.x+this.headWidth+this.width+this.teilLength*2,this.y+this.height);
        ctx.lineTo(this.x+this.headWidth+this.width+this.teilLength*2,this.y);
        // ctx.restore()
        ctx.fill();

        this.drawVertices()

    };

    Fish.prototype.drawVertices = function () {
        var ctx = GameModel.getInstance().ctx;

        var topLeft = {x: this.x - this.width / 2, y: this.y - this.height / 2};
        var topRight = {x: this.x + this.width / 2, y: this.y - this.height / 2};
        var bottomLeft = {x: this.x - this.width / 2, y: this.y + this.height / 2};
        var bottomRight = {x: this.x + this.width / 2, y: this.y + this.height / 2};

        var pivot = {x: this.x, y: this.y};

        topLeft = Utils.rotatePoint(pivot, topLeft, this.angle);
        topRight = Utils.rotatePoint(pivot, topRight, this.angle);
        bottomLeft = Utils.rotatePoint(pivot, bottomLeft, this.angle);
        bottomRight = Utils.rotatePoint(pivot, bottomRight, this.angle);

        ctx.beginPath();
        ctx.rect(topLeft.x, topLeft.y, 5, 5);
        ctx.rect(topRight.x, topRight.y, 5, 5);
        ctx.rect(bottomLeft.x, bottomLeft.y, 5, 5);
        ctx.rect(bottomRight.x, bottomRight.y, 5, 5);
        ctx.closePath();
        ctx.fillStyle = "#ffffff";
        ctx.fill();
    };

    Fish.prototype.update = function (deltaTime, cameraY) {

        this.moveBehaviour.move(deltaTime);

        this.x = this.moveBehaviour.x;
        this.y = this.moveBehaviour.y - cameraY;
        this.angle = this.moveBehaviour.angle;

        this.draw();

    };
    return Fish;
})();