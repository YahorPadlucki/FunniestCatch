var Fish = (function () {

    var colors = ["#A52A2A", "#FF7F50", "#00008B", "#006400", "#FF1493", "#C71585", "#FF4500"];

    function Fish(x, y) {

        this.bodyWidth = 20;
        this.bodyHeight = 20;
        this.headWidth = this.bodyHeight / 2;
        this.tailWidth = 10;

        this.width = this.headWidth + this.bodyWidth + this.tailWidth;
        this.height = this.bodyHeight;

        this.color = colors[Math.floor(Math.random() * colors.length)];

        this.moveBehaviour = new SineMove(x, y);
        this.angle = this.moveBehaviour.angle;
    }

    Fish.prototype.draw = function () {
        var ctx = GameModel.getInstance().ctx;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.beginPath();
        ctx.fillStyle = this.color;
//draw head
        var headX = -this.width / 2 + this.headWidth;
        ctx.arc(headX, 0, this.headWidth, 1.57, -1.57, false);
        ctx.fill();
//draw body
        ctx.beginPath();
        ctx.fillRect(headX, -this.bodyHeight / 2, this.bodyWidth, this.bodyHeight);
//drawTail
        ctx.beginPath();
        var tailX = headX + this.bodyWidth;
        ctx.moveTo(tailX, -this.bodyHeight / 2);
        ctx.lineTo(tailX + this.tailWidth, this.bodyHeight / 2);
        ctx.lineTo(tailX + this.tailWidth, -this.bodyHeight / 2);
        ctx.lineTo(tailX, this.bodyHeight / 2);
        ctx.fill();

        ctx.restore();

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